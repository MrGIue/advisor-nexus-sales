export default function FeatureMarketing() {
  const channels = [
    {
      label: "Email Marketing",
      title: "Campaigns, Sequences, Newsletters",
      points: [
        "Build email campaigns with a drag-and-drop editor",
        "Set up automated follow-up sequences that run while you sleep",
        "One-time DNS setup required so your emails land in inboxes — follow our guide or we'll handle it for you ($99)",
        "Don't want to deal with email setup? Send from our managed domain ($49/mo)",
      ],
    },
    {
      label: "Text Messaging",
      title: "Reach Prospects Where They Actually Look",
      points: [
        "Send text messages directly from the platform",
        "To send texts in the US, every business needs to go through a registration process — it's federal regulation, not unique to us",
        "We handle the registration as a paid service so you don't have to figure it out yourself",
      ],
    },
    {
      label: "Social Media Planner",
      title: "Every Platform, One Dashboard",
      points: [
        "Connect all your social media accounts",
        "Schedule and publish posts from one place",
        "Track comments across every platform in a single inbox",
        "See analytics on every post — know what's working",
      ],
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          Your Marketing Engine
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          Stay in Front of Clients and Prospects
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Email, text, and social media — all from one dashboard. No switching
          between apps.
        </p>

        <div className="space-y-8">
          {channels.map((ch) => (
            <div
              key={ch.label}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-8"
            >
              <p className="text-brand-teal text-sm font-heading font-semibold uppercase tracking-wider mb-2">
                {ch.label}
              </p>
              <h3 className="font-heading font-bold text-xl mb-4 text-white/90">
                {ch.title}
              </h3>
              <ul className="space-y-3">
                {ch.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/60 text-sm"
                  >
                    <span className="text-brand-teal mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
