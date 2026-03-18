export default function CostComparison() {
  const tools = [
    { category: "CRM", examples: "Wealthbox, Redtail", cost: "$45–145/mo" },
    {
      category: "Email Marketing",
      examples: "ActiveCampaign, Mailchimp",
      cost: "$30–100/mo",
    },
    {
      category: "Funnels & Landing Pages",
      examples: "ClickFunnels, Leadpages",
      cost: "$49–97/mo",
    },
    {
      category: "Scheduling",
      examples: "Calendly, Acuity",
      cost: "$12–20/mo",
    },
    {
      category: "Social Media",
      examples: "Hootsuite, Buffer",
      cost: "$20–50/mo",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold text-center mb-4 text-white/95">
          What You&apos;re Probably Paying Right Now
        </h2>
        <p className="text-white/60 text-center text-lg mb-12 max-w-2xl mx-auto">
          Most advisors are spending $300+ a month on 3–4 tools that
          don&apos;t talk to each other.
        </p>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {tools.map((tool, i) => (
            <div
              key={tool.category}
              className={`flex items-center justify-between px-6 py-4 ${
                i < tools.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div>
                <p className="font-heading font-semibold text-white/90">
                  {tool.category}
                </p>
                <p className="text-sm text-white/40">{tool.examples}</p>
              </div>
              <p className="text-white/60 font-mono text-sm">{tool.cost}</p>
            </div>
          ))}

          {/* Typical total */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-t border-white/10">
            <div>
              <p className="font-heading font-semibold text-white/80">
                Typical advisor stack
              </p>
              <p className="text-sm text-white/40">3–4 of the above</p>
            </div>
            <p className="font-heading font-bold text-lg text-white/80">
              $250–400+/mo
            </p>
          </div>

          {/* Advisor Nexus */}
          <div className="flex items-center justify-between px-6 py-5 bg-brand-teal/10 border-t-2 border-brand-teal">
            <div>
              <p className="font-heading font-bold text-brand-teal text-lg">
                Advisor Nexus
              </p>
              <p className="text-sm text-brand-teal/70">
                All of the above + more
              </p>
            </div>
            <p className="font-heading font-bold text-2xl text-brand-teal">
              $197/mo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
