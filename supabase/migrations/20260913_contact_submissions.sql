-- ==============================================================================
-- CloudCom Networks Contact Form Submissions Schema
-- Description: Stores enterprise customer inquiries securely with RLS policies
-- ==============================================================================

-- 1. Create table for contact submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    designation TEXT,
    company TEXT NOT NULL,
    email TEXT NOT NULL,
    country_code TEXT NOT NULL DEFAULT '+91',
    phone TEXT NOT NULL,
    requirement TEXT NOT NULL,
    message TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'contacted', 'closed')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Performance indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
    ON public.contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
    ON public.contact_submissions (email);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
    ON public.contact_submissions (status);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow anon and authenticated clients to insert new submissions
DROP POLICY IF EXISTS "Allow anonymous submission inserts" ON public.contact_submissions;
CREATE POLICY "Allow anonymous submission inserts"
    ON public.contact_submissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 5. Policy: Service role has full access (read, update, delete)
DROP POLICY IF EXISTS "Allow service role full access" ON public.contact_submissions;
CREATE POLICY "Allow service role full access"
    ON public.contact_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 6. Policy: Disallow public reading of submissions
-- By default, no SELECT policy for anon means anonymous users CANNOT read contact inquiries.
-- Only authenticated administrators or the server service_role key can view submissions.

COMMENT ON TABLE public.contact_submissions IS 'Stores verified customer inquiries submitted through CloudCom Networks contact form.';
