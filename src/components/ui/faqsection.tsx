"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqsLeft?: FAQItem[];
  faqsRight?: FAQItem[];
  className?: string;
}

const defaultFaqsLeft: FAQItem[] = [
  {
    question: "What cloud infrastructure services does Astroud provide?",
    answer:
      "Astroud delivers enterprise-grade cloud foundations, seamless cloud migration, Microsoft 365 tenant management, high-performance managed hosting, 24/7 engineering support, and automated backup & recovery.",
  },
  {
    question: "How long does a typical cloud migration take?",
    answer:
      "Migration timelines depend on workload complexity. Discovery takes 3–5 business days, and zero-downtime phased migrations are typically completed within 2 to 6 weeks.",
  },
  {
    question: "Is 24/7 technical support included with all plans?",
    answer:
      "Yes! Every managed plan includes continuous real-time infrastructure monitoring and direct access to senior cloud engineers 24 hours a day, 365 days a year.",
  },
  {
    question: "How do you handle cloud security and compliance?",
    answer:
      "We build multi-layered zero-trust security architectures, continuous threat detection, automated encryption, and strict regulatory compliance alignment.",
  },
  {
    question: "Can Astroud help optimize our monthly cloud spend?",
    answer:
      "Yes. Our FinOps cost-optimization audit inspects resource utilization, removes waste, rightsizes workloads, and can reduce overall cloud spend by 20% to 40%.",
  },
];

const defaultFaqsRight: FAQItem[] = [
  {
    question: "Do we have to sign a long-term contract?",
    answer:
      "No long-term contracts required. Astroud offers flexible monthly plans with zero lock-in, as well as fixed-scope project delivery options.",
  },
  {
    question: "What happens if a server or critical service goes down?",
    answer:
      "Our automated failover clusters and 24/7 operations center detect anomalies instantly, maintaining 99.99% system availability SLAs.",
  },
  {
    question: "Does Astroud manage hybrid or multi-cloud environments?",
    answer:
      "Yes. We specialize in unified governance and management across hybrid on-premise setups, AWS, Microsoft Azure, Google Cloud, and private hosting.",
  },
  {
    question: "Is automated backup and recovery built in?",
    answer:
      "Yes. High-frequency automated backups with tested fast Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) are standard across all plans.",
  },
  {
    question: "How do we get started with a cloud consultation?",
    answer:
      "Simply click 'Book a consultation' to pick a time. Our team will review your current infrastructure context and present a tailored architecture plan.",
  },
];

export function FAQSection({
  title = "Cloud & Infrastructure Support",
  subtitle = "FREQUENTLY ASKED QUESTIONS",
  description = "Everything you need to know about Astroud cloud services, security protocols, migration roadmaps, and 24/7 support.",
  buttonLabel = "Explore 24/7 Support →",
  onButtonClick,
  faqsLeft = defaultFaqsLeft,
  faqsRight = defaultFaqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full max-w-6xl mx-auto py-20 px-6 text-slate-900 relative bg-white", className)}>
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-50/60 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {subtitle}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          {title}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-normal">
          {description}
        </p>

        {onButtonClick ? (
          <Button 
            variant="default" 
            style={{ color: '#FFFFFF' }}
            className="rounded-full px-7 py-5 text-sm font-bold bg-[#161E2D] text-white hover:bg-[#232F3E] hover:scale-105 transition-all shadow-md" 
            onClick={onButtonClick}
          >
            <span style={{ color: '#FFFFFF' }}>{buttonLabel}</span>
          </Button>
        ) : (
          <Link 
            to="/services/24-7-support" 
            style={{ color: '#FFFFFF', textDecoration: 'none' }}
            className="inline-flex items-center justify-center rounded-full bg-[#161E2D] text-white px-7 py-3 text-sm font-bold hover:bg-[#232F3E] transition-all hover:scale-105 shadow-md cursor-pointer"
          >
            <span style={{ color: '#FFFFFF' }}>{buttonLabel}</span>
          </Link>
        )}
      </div>

      {/* FAQs Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${columnIndex}-${i}`}
                className="border border-slate-200 bg-slate-50/80 hover:bg-slate-100/90 rounded-xl px-5 py-1 transition-colors shadow-xs"
              >
                <AccordionTrigger className="text-base font-semibold text-slate-900 hover:text-blue-600 no-underline hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed font-normal">
                  <div className="pt-1 pb-3 text-slate-600 font-normal">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
