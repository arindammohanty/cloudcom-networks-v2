import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { 
  Building,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingCart,
  Monitor,
  Users,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import React from "react";

const industriesData: Record<string, any> = {
  "government": {
    name: "Government & Public Sector",
    icon: <Landmark className="w-16 h-16 text-cloud-blue" />,
    details: "Modernize public services securely. We provide the robust, compliant infrastructure needed for e-governance initiatives, ensuring citizen data remains protected and services are always available.",
    useCases: ["e-Governance Infrastructure", "Smart City Data Platforms", "Secure Citizen Portals"],
    compliance: ["MeitY Empanelment", "Data Localization (DPDP Act)", "State Security Audits"],
    caseStudies: ["State Data Center Modernization", "Nationwide Secure Email Deployment"]
  },
  "education": {
    name: "Education",
    icon: <GraduationCap className="w-16 h-16 text-cloud-blue" />,
    details: "Empower the next generation of learners. From scalable portals to handle admission spikes to secure unified communications for remote classrooms, we provide the IT foundation for modern education.",
    useCases: ["Admission Portal Scaling", "Virtual Classroom Infrastructure", "Campus Wi-Fi & Networking"],
    compliance: ["FERPA/Local Education Data Laws", "Data Privacy Standards", "Accessibility Guidelines"],
    caseStudies: ["University Admission Traffic Management", "Secure Multi-Campus Network Rollout"]
  },
  "healthcare": {
    name: "Healthcare",
    icon: <HeartPulse className="w-16 h-16 text-cloud-blue" />,
    details: "In healthcare, downtime can be critical. Our highly available infrastructure and strict zero-trust security ensure that sensitive patient data is protected and always accessible to authorized medical professionals.",
    useCases: ["Electronic Health Records (EHR) Hosting", "Telemedicine Infrastructure", "Medical Imaging Data Storage"],
    compliance: ["HIPAA Compliance", "Local Health Data Regulations", "Zero-Trust Architecture"],
    caseStudies: ["Hospital Network Zero-Downtime Migration", "Secure Telehealth Platform Scaling"]
  },
  "bfsi": {
    name: "BFSI",
    icon: <Building className="w-16 h-16 text-cloud-blue" />,
    details: "Financial institutions require the highest level of security and compliance. Our tailored banking infrastructure provides dedicated resources, comprehensive SOC monitoring, and ultra-low latency.",
    useCases: ["Core Banking Systems Hosting", "High-Frequency Trading Networks", "Fraud Detection & Analytics Infrastructure"],
    compliance: ["PCI-DSS", "RBI/Local Banking IT Guidelines", "ISO 27001"],
    caseStudies: ["Fintech Payment Gateway Infrastructure", "Regional Bank Cloud Transformation"]
  },
  "enterprises": {
    name: "Enterprises",
    icon: <Factory className="w-16 h-16 text-cloud-blue" />,
    details: "Drive your business forward with scalable infrastructure, digital transformation, and operational resilience. We abstract the complexity of IT so you can focus on enterprise growth.",
    useCases: ["ERP & CRM Hosting", "Hybrid Cloud Operations", "Enterprise-wide Unified Communications"],
    compliance: ["SOC 2 Type II", "GDPR & Local Data Laws", "Industry-specific Standards"],
    caseStudies: ["Global Enterprise Cloud Consolidation", "Supply Chain IT Modernization"]
  },
  "startups": {
    name: "Startups & SMEs",
    icon: <Users className="w-16 h-16 text-cloud-blue" />,
    details: "Get enterprise-grade technology without the enterprise price tag. Our fully managed solutions let startups and SMEs focus on growth and customer acquisition, completely abstracting the complexity of IT.",
    useCases: ["Cloud Native App Deployment", "Turnkey Managed IT", "Scalable E-commerce Infrastructure"],
    compliance: ["Startup Security Baselines", "Cost-effective Compliance Implementation", "Data Protection"],
    caseStudies: ["Fast-tracking SaaS Platform Launch", "SME Zero-Trust Implementation"]
  }
};

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export default async function IndustryDetail({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const industry = industriesData[slug];

  if (!industry) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <Link href="/industries">
          <Button>Back to Industries</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-dark-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <Container className="relative z-10">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="mb-8 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              {industry.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{industry.name}</h1>
            <p className="text-xl text-gray-300 font-light">Engineered for Your Industry</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-bold text-dark-navy mb-6">Industry Overview</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                {industry.details}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="text-lg font-bold text-dark-navy mb-4">Specific Use Cases</h3>
                  <ul className="space-y-3">
                    {industry.useCases?.map((useCase: string) => (
                      <li key={useCase} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-cloud-blue shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700 text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                  <h3 className="text-lg font-bold text-dark-navy mb-4">Compliance Requirements</h3>
                  <ul className="space-y-3">
                    {industry.compliance?.map((comp: string) => (
                      <li key={comp} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700 text-sm">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100">
                  <h3 className="text-lg font-bold text-dark-navy mb-4">Relevant Case Studies</h3>
                  <ul className="space-y-3">
                    {industry.caseStudies?.map((study: string) => (
                      <li key={study} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700 text-sm">{study}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-cloud-blue/5 p-8 rounded-2xl border border-cloud-blue/20 text-center">
                <h3 className="text-2xl font-bold text-dark-navy mb-4">Transform your {industry.name} operations</h3>
                <p className="text-text-secondary mb-8">
                  Get in touch with our industry experts to discuss your specific requirements.
                </p>
                <Link href={`/contact?interest=${encodeURIComponent(industry.name)}`}>
                  <Button size="lg" className="font-bold">Contact Sales</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </div>
  );
}
