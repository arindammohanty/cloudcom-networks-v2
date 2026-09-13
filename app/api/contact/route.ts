import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { validateContactSubmission, ContactSubmissionPayload } from '@/lib/contact-validation';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

// Rate limit: 5 submissions per 10 minutes per IP
const RATE_LIMIT_CONFIG = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
};

export async function POST(req: NextRequest) {
  try {
    // 1. IP-based Rate Limiting
    const clientIp = getClientIp(req.headers);
    const rateLimitResult = rateLimit(`contact_${clientIp}`, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.success) {
      const retryAfterSeconds = Math.ceil((rateLimitResult.reset - Date.now()) / 1000);
      return NextResponse.json(
        {
          error: 'Too many requests. You have exceeded the submission limit. Please wait a few minutes before trying again.',
          retryAfter: retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfterSeconds),
            'X-RateLimit-Limit': String(rateLimitResult.limit),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.reset),
          },
        }
      );
    }

    // 2. Parse request payload
    let body: ContactSubmissionPayload;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload in request body.' },
        { status: 400 }
      );
    }

    // 3. Validation & Sanitization
    const validation = validateContactSubmission(body);

    // Bot defense (honeypot or unrealistic submission speed): return fake success
    if (validation.isBot) {
      console.warn(`[Bot Defense] Rejected automated submission from IP: ${clientIp}`);
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received.',
      });
    }

    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        {
          error: 'Form validation failed. Please check the fields and try again.',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { sanitized } = validation;
    const userAgent = req.headers.get('user-agent') || 'Unknown';

    // 4. Record to Supabase
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      
      if (!supabase) {
        console.error('[Supabase Error] Client initialization failed with provided credentials.');
        return NextResponse.json(
          { error: 'Internal database service unavailable. Please email us at hello@cloudcomnet.com.' },
          { status: 500 }
        );
      }

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert({
          name: sanitized.name,
          designation: sanitized.designation || null,
          company: sanitized.company,
          email: sanitized.email,
          country_code: sanitized.countryCode,
          phone: sanitized.phone,
          requirement: sanitized.requirement,
          message: sanitized.message,
          ip_address: clientIp,
          user_agent: userAgent,
          status: 'new',
          created_at: new Date().toISOString(),
        })
        .select('id')
        .single();

      if (error) {
        console.error('[Supabase Insert Error]:', error.message, error.details);
        return NextResponse.json(
          { error: 'Unable to save your message to our database. Please contact us at hello@cloudcomnet.com.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been recorded successfully. Our team will contact you shortly.',
        id: data?.id,
      });
    } else {
      // Development mode fallback when Supabase keys are not set locally
      console.warn('[Contact API] Supabase is not yet configured in environment variables.');
      console.log('[Dev Contact Submission]:', {
        ...sanitized,
        ip: clientIp,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been recorded. (Dev mode: Supabase credentials pending)',
        devNotice: 'Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY) are required to persist to Supabase in production.',
      });
    }
  } catch (error) {
    console.error('[Unhandled Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
