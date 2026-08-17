import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { 
  Cloud, 
  MessageSquare, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Cpu, 
  Briefcase,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import React from "react";

const solutionsData: Record<string, any> = {
  "communications": {
    title: "Unified Communications & Collaboration",
    icon: <MessageSquare className="w-16 h-16 text-cloud-blue" />,
    description: "Our flagship vertical. Secure Zero-Trust Communications powering your enterprise.",
    features: ["Enterprise Email", "Voice (IP PBX)", "Video Conferencing", "Contact Center", "AI Assistants"],
    details: "Empower your workforce with our comprehensive suite of communication tools designed for the modern, distributed enterprise. We ensure every interaction is secured with zero-trust architecture, providing seamless collaboration without compromising on data sovereignty or compliance."
  },
  "cloud": {
    title: "Cloud Infrastructure & Hosting",
    icon: <Cloud className="w-16 h-16 text-cloud-blue" />,
    description: "Scalable, resilient cloud platforms built on open standards.",
    features: ["Virtual Private Cloud", "Kubernetes Hosting", "Managed Databases", "Disaster Recovery"],
    details: "Our cloud infrastructure provides the robust foundation your applications need to scale. Benefit from high-availability hosting, automated failover, and comprehensive disaster recovery solutions tailored to keep your business online 24/7."
  },
  "applications": {
    title: "Enterprise Applications",
    icon: <Layers className="w-16 h-16 text-cloud-blue" />,
    description: "Expert implementation and customization partner for core enterprise software.",
    features: ["SAP Hosting & Migration", "Salesforce CRM", "Open Source ERP (Odoo)"],
    details: "Streamline your business processes with our managed enterprise applications. From SAP migrations to custom ERP deployments, our team ensures your core software runs flawlessly on optimized, secure infrastructure."
  },
  "cybersecurity": {
    title: "Cyber Security",
    icon: <ShieldCheck className="w-16 h-16 text-cloud-blue" />,
    description: "Naturally connected to our Zero Trust philosophy to protect your assets.",
    features: ["Security Audit", "SOC & SIEM", "Penetration Testing", "Identity Access Management"],
    details: "Security isn't an afterthought; it's the core of everything we do. Our dedicated SOC provides round-the-clock monitoring, threat hunting, and rapid incident response to safeguard your critical digital assets against evolving threats."
  },
  "managed-operations": {
    title: "Managed Infrastructure & Data Centers",
    icon: <Settings className="w-16 h-16 text-cloud-blue" />,
    description: "Comprehensive management of your critical IT infrastructure.",
    features: ["Data Center Operations", "NOC Services", "Server Administration", "Patch Management"],
    details: "Offload the complexity of day-to-day IT operations to our certified experts. We proactively monitor, manage, and optimize your infrastructure, ensuring peak performance and reliability while freeing your team to focus on strategic initiatives."
  },
  "ai-automation": {
    title: "AI & Automation",
    description: "Agile delivery pipelines and custom software solutions.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Custom Web Apps", "API Development"],
    details: "Accelerate your software delivery without compromising on security. We build automated DevSecOps pipelines and custom cloud-native applications tailored exactly to your unique business requirements."
  },
  "bpo-kpo": {
    title: "Managed BPO & KPO Services",
    icon: <Briefcase className="w-16 h-16 text-cloud-blue" />,
    description: "Knowledge Process Outsourcing running on our secure infrastructure.",
    features: ["Finance & Accounting", "HR Compliance", "Customer Support Helpdesk"],
    details: "Scale your operations efficiently with our specialized BPO and KPO services. Backed by our secure infrastructure, our domain experts seamlessly integrate with your organization to deliver high-quality, compliant process management."
  },
  "iot-edge": {
    title: "IoT & Edge Computing",
    icon: <Cpu className="w-16 h-16 text-cloud-blue" />,
    description: "Intelligent Edge and IoT platforms for real-time decision making.",
    features: ["Edge Analytics", "IoT Device Management", "Real-time Monitoring", "Industrial IoT"],
    details: "Connect and manage your dispersed assets with our secure IoT and Edge platforms. Process data closer to the source to reduce latency and bandwidth usage, while ensuring enterprise-grade security across your entire connected ecosystem."
  }
};

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export default async function SolutionDetail({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = solutionsData[slug];

  if (!solution) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <Link href="/solutions">
          <Button>Back to Solutions</Button>
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
              {solution.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{solution.title}</h1>
            <p className="text-xl text-gray-300">{solution.description}</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-bold text-dark-navy mb-6">Overview</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                {solution.details}
              </p>
              
              <h3 className="text-2xl font-bold text-dark-navy mb-6">Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-16">
                {solution.features.map((feature: string) => (
                  <div key={feature} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-success-green shrink-0" />
                    <span className="font-semibold text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cloud-blue/5 p-8 rounded-2xl border border-cloud-blue/20 text-center">
                <h3 className="text-2xl font-bold text-dark-navy mb-4">Ready to transform your infrastructure?</h3>
                <p className="text-text-secondary mb-8">
                  Get in touch with our architecture team to discuss how {solution.title} can drive your business forward.
                </p>
                <Link href={`/contact?interest=${encodeURIComponent(solution.title)}`}>
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
