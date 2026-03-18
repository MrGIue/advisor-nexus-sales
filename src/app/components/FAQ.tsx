"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "No. Advisor Nexus is a commitment to growing your practice. Every account is provisioned with a customized setup, and all sales are final.",
  },
  {
    q: "What if I need help setting things up?",
    a: "You'll have access to video guides and documentation for everything included in your account. For hands-on help with email setup, SMS registration, CRM migration, or custom integrations, we offer paid setup services.",
  },
  {
    q: "Can I send text messages right away?",
    a: "SMS requires a registration process due to federal regulations. We handle this as a paid service. Email is available immediately once you complete email authentication or use our managed domain.",
  },
  {
    q: "I already have a CRM. Do I have to switch?",
    a: "No. You can run Advisor Nexus alongside your current CRM. Many advisors start that way and migrate over time. If you want help migrating, we offer that as a service.",
  },
  {
    q: "What if it's not for me?",
    a: "All sales are final. We encourage you to review this page, the feature list, and the setup requirements before purchasing. If you have questions, reach out before you buy.",
  },
  {
    q: "Can I use Calendly or other scheduling tools?",
    a: "Advisor Nexus has built-in calendars that integrate with Zoom, Microsoft Teams, and Google Meet. You won't need Calendly. For other tools, custom integrations may be possible via webhooks — contact us for details.",
  },
  {
    q: "Is this the same as the Trained Advisor program?",
    a: "Advisor Nexus is the platform. The Trained Advisor Elite program includes the platform plus done-for-you campaign management, coaching calls, and more. Think of Advisor Nexus as the foundation — you can upgrade to the full program anytime.",
  },
  {
    q: "Are there any limits on contacts or users?",
    a: "No. Unlimited contacts, unlimited users. Add your whole team.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold text-center mb-12 text-white/95">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <span className="font-heading font-semibold text-white/90">
                  {faq.q}
                </span>
                <span
                  className={`text-brand-teal shrink-0 text-xl transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-200 ease-out"
                style={{
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
