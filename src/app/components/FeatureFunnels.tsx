export default function FeatureFunnels() {
  const features = [
    {
      icon: "◇",
      title: "Drag-and-Drop Builder",
      description:
        "Build landing pages and funnels without touching code. If you can use PowerPoint, you can use this.",
    },
    {
      icon: "⬡",
      title: "Ready-to-Use Templates",
      description:
        "Pre-built templates you can customize in minutes. Webinar pages, lead magnets, opt-in forms — pick one and make it yours.",
    },
    {
      icon: "◎",
      title: "One-Page Advisor Websites",
      description:
        "Need a simple web presence? Build a professional one-page site for your practice — no web developer needed.",
    },
    {
      icon: "▣",
      title: "Lead Capture Forms",
      description:
        "Capture prospect information with custom forms. Data flows straight into your CRM — no copy-pasting.",
    },
    {
      icon: "⊕",
      title: "Your Own Domain",
      description:
        "Connect your custom domain so everything looks and feels like your brand.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          Your Funnels & Website
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          Landing Pages, Lead Capture, and Your Online Presence
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Need a landing page for your next webinar? A simple website for your
          practice? Build it in minutes.
        </p>

        {/* Horizontal feature list with icons — not cards */}
        <div className="space-y-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-5 py-5 border-b border-white/5 last:border-b-0"
            >
              <span className="text-brand-teal text-2xl shrink-0 mt-0.5 w-8 text-center">
                {f.icon}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1 text-white/90">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
