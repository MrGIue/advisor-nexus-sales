export default function WhatsIncluded() {
  const included = [
    "Full Advisor Nexus CRM account",
    "Unlimited contacts",
    "Unlimited users",
    "Built-in calendars with Zoom, Teams, and Google Meet integration",
    "Funnel and landing page builder with pre-built templates",
    "Email marketing — campaigns, sequences, newsletters",
    "Social media planner with cross-platform analytics",
    "Workflow automations",
    "Video guides and self-serve documentation",
    "No long-term contract — month to month, cancel anytime",
  ];

  const addOns = [
    { name: "Email authentication setup", price: "$99 one-time" },
    { name: "Managed email domain", price: "$49/mo" },
    { name: "SMS registration & setup", price: "Contact us" },
    { name: "Custom domain setup", price: "$99 one-time" },
    { name: "CRM migration", price: "Custom quote" },
    { name: "Custom campaigns", price: "Custom quote" },
    { name: "Custom integrations", price: "Custom quote" },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold text-center mb-12 text-white/95">
          What&apos;s Included at $197/month
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="bg-white/[0.03] border border-brand-teal/20 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl mb-6 text-brand-teal">
              Included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <span className="text-brand-teal mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-Ons */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl mb-6 text-white/80">
              Available Add-Ons
            </h3>
            <ul className="space-y-4">
              {addOns.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white/60">{item.name}</span>
                  <span className="text-white/40 font-mono text-xs shrink-0 ml-4">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
