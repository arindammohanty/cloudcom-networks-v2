interface RateLimitConfig {
  limit: number;      // Maximum requests allowed within window
  windowMs: number;   // Window duration in milliseconds
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;      // Epoch milliseconds when current window expires
}

// In-memory token bucket per client key
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Periodic cleanup interval (every 5 minutes)
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupExpiredEntries() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  
  lastCleanup = now;
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Checks and records rate limit for a given key (typically client IP).
 * 
 * @param key Identifier for the client (e.g. IP address)
 * @param config { limit: number, windowMs: number }
 */
export function rateLimit(
  key: string,
  config: RateLimitConfig = { limit: 5, windowMs: 10 * 60 * 1000 }
): RateLimitResult {
  cleanupExpiredEntries();

  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    // New or expired window
    const resetTime = now + config.windowMs;
    rateLimitStore.set(key, { count: 1, resetTime });
    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - 1,
      reset: resetTime,
    };
  }

  if (record.count >= config.limit) {
    // Limit exceeded
    return {
      success: false,
      limit: config.limit,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  // Increment within window
  record.count += 1;
  return {
    success: true,
    limit: config.limit,
    remaining: config.limit - record.count,
    reset: record.resetTime,
  };
}

/**
 * Helper to extract client IP address from Next.js request headers.
 */
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  return '127.0.0.1';
}
