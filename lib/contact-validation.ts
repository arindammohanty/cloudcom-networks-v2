export interface ContactSubmissionPayload {
  name: string;
  designation?: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  requirement: string;
  message: string;
  honeypot?: string;         // Hidden anti-bot field
  formStartTime?: number;    // Timestamp when form was loaded in client
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitized?: {
    name: string;
    designation: string;
    company: string;
    email: string;
    countryCode: string;
    phone: string;
    requirement: string;
    message: string;
  };
  isBot?: boolean;
}

/**
 * Basic HTML / script tag sanitizer to strip potentially malicious markup.
 */
function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, '')         // Strip HTML tags
    .replace(/[<>'"&]/g, (char) => {  // Escape dangerous characters
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return char;
      }
    })
    .trim();
}

/**
 * Validates and sanitizes a contact form submission payload.
 */
export function validateContactSubmission(payload: ContactSubmissionPayload): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Honeypot check: If the hidden honeypot field is filled, flag as bot
  if (payload.honeypot && payload.honeypot.trim() !== '') {
    return { isValid: false, errors: { bot: 'Spam detected' }, isBot: true };
  }

  // 2. Minimum form fill time: Humans take at least ~1.5s to fill this multi-field form
  if (payload.formStartTime) {
    const elapsedMs = Date.now() - payload.formStartTime;
    if (elapsedMs < 1200) {
      return { isValid: false, errors: { bot: 'Submission too fast' }, isBot: true };
    }
  }

  // 3. Name validation
  const rawName = (payload.name || '').trim();
  if (!rawName) {
    errors.name = 'Full name is required';
  } else if (rawName.length < 2) {
    errors.name = 'Full name must be at least 2 characters';
  } else if (rawName.length > 100) {
    errors.name = 'Full name cannot exceed 100 characters';
  }

  // 4. Company validation
  const rawCompany = (payload.company || '').trim();
  if (!rawCompany) {
    errors.company = 'Organisation / Company name is required';
  } else if (rawCompany.length < 2) {
    errors.company = 'Company name must be at least 2 characters';
  } else if (rawCompany.length > 150) {
    errors.company = 'Company name cannot exceed 150 characters';
  }

  // 5. Email validation
  const rawEmail = (payload.email || '').trim().toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!rawEmail) {
    errors.email = 'Work email is required';
  } else if (!emailRegex.test(rawEmail)) {
    errors.email = 'Please provide a valid work email address';
  } else if (rawEmail.length > 255) {
    errors.email = 'Email address cannot exceed 255 characters';
  }

  // 6. Phone validation
  const rawPhone = (payload.phone || '').replace(/\D/g, '');
  if (!rawPhone) {
    errors.phone = 'Phone number is required';
  } else if (rawPhone.length !== 10) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }

  // 7. Country code validation
  const rawCountryCode = (payload.countryCode || '+91').trim();
  if (!/^\+\d{1,4}$/.test(rawCountryCode)) {
    errors.countryCode = 'Invalid country code format';
  }

  // 8. Requirement validation
  const rawRequirement = (payload.requirement || '').trim();
  if (!rawRequirement) {
    errors.requirement = 'Please select your requirement';
  } else if (rawRequirement.length > 150) {
    errors.requirement = 'Requirement cannot exceed 150 characters';
  }

  // 9. Message validation
  const rawMessage = (payload.message || '').trim();
  if (!rawMessage) {
    errors.message = 'Message is required';
  } else if (rawMessage.length < 5) {
    errors.message = 'Message must be at least 5 characters long';
  } else if (rawMessage.length > 3000) {
    errors.message = 'Message cannot exceed 3,000 characters';
  }

  // Designation (optional)
  const rawDesignation = (payload.designation || '').trim();
  if (rawDesignation.length > 100) {
    errors.designation = 'Designation cannot exceed 100 characters';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    sanitized: {
      name: sanitizeString(rawName),
      designation: sanitizeString(rawDesignation),
      company: sanitizeString(rawCompany),
      email: rawEmail,
      countryCode: rawCountryCode,
      phone: rawPhone,
      requirement: sanitizeString(rawRequirement),
      message: sanitizeString(rawMessage),
    },
  };
}
