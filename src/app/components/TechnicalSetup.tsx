export default function TechnicalSetup() {
  const items = [
    {
      task: "Email Authentication",
      description:
        "A one-time DNS setup so your emails land in inboxes — not spam. Follow our video guide for free, or we'll set it up for you.",
      diy: "Free — video guide",
      doneForYou: "$99 one-time",
      alt: "Or skip it entirely — send from our managed email domain for $49/mo.",
    },
    {
      task: "SMS Registration",
      description:
        "To send text messages in the US, your business needs to go through a registration process. It's federal regulation — every platform requires it.",
      diy: null,
      doneForYou: "We handle it — fees apply",
      alt: null,
    },
    {
      task: "Custom Domain",
      description:
        "Connect your own domain to your funnels and website so everything matches your brand.",
      diy: "Free — follow our guide",
      doneForYou: "$99 one-time",
      alt: null,
    },
    {
      task: "CRM Migration",
      description:
        "Moving from Wealthbox, Redtail, or another CRM? We'll scope it on a call and give you a custom quote.",
      diy: null,
      doneForYou: "Custom quote",
      alt: null,
    },
    {
      task: "Custom Integrations",
      description:
        "Need to connect tools we don't natively integrate with? Webhooks and API access are included. Custom setup available.",
      diy: "Webhooks & API included",
      doneForYou: "Custom quote",
      alt: null,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          Setup & Support
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          We Handle the Technical Stuff
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Some things need a quick setup. You can do it yourself with our video
          guides, or we&apos;ll handle it for you.
        </p>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.task}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-2 text-white/90">
                {item.task}
              </h3>
              <p className="text-white/50 text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-3">
                {item.diy && (
                  <span className="text-xs font-heading bg-white/5 text-white/60 px-3 py-1.5 rounded-lg">
                    DIY: {item.diy}
                  </span>
                )}
                {item.doneForYou && (
                  <span className="text-xs font-heading bg-brand-teal/10 text-brand-teal px-3 py-1.5 rounded-lg">
                    Done-for-you: {item.doneForYou}
                  </span>
                )}
              </div>
              {item.alt && (
                <p className="text-xs text-white/40 mt-3">{item.alt}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
