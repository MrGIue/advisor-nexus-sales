export default function FeatureCRM() {
  const featured = {
    title: "Unlimited Contacts",
    description:
      "No per-contact pricing. Add every client, prospect, and referral partner without watching a meter. Your database grows with your practice — not your bill.",
  };

  const secondary = [
    {
      title: "Custom Pipelines",
      description:
        "Organize your sales process your way — from first meeting to policy delivered.",
    },
    {
      title: "Unlimited Users",
      description:
        "Add your team, your assistant, your compliance officer. No per-seat fees.",
    },
    {
      title: "Activity Tracking",
      description:
        "Notes, tasks, calls, emails — everything attached to the contact, not buried in your inbox.",
    },
    {
      title: "Custom Fields",
      description:
        "Track what matters to your practice. Policy types, carrier preferences, AUM — your fields, your way.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          Your CRM
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          Your Contacts, Your Pipeline, Your Way
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          A real CRM built for how financial advisors actually work — not a
          stripped-down contact list with a price tag on every feature.
        </p>

        {/* Bento-style: large featured item left, stacked smaller items right */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured item — spans 2 columns */}
          <div className="lg:col-span-2 bg-brand-teal/[0.06] border border-brand-teal/20 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="font-heading font-bold text-xl mb-3 text-brand-teal">
              {featured.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {featured.description}
            </p>
          </div>

          {/* Secondary items — 2x2 grid on the right */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {secondary.map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:border-brand-teal/20 transition-colors"
              >
                <h3 className="font-heading font-semibold text-lg mb-2 text-white/90">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
