export default function Roadmap() {
  const items = [
    {
      title: "AI Assistant",
      description:
        'Ask it to send an email, add a contact, or schedule a follow-up — and it just does it. "Send an email to John and CC his accountant." Done.',
    },
    {
      title: "Advisor-Specific Pipelines",
      description:
        "Pipeline stages built for how insurance and annuity sales actually work — application submitted, underwriting, policy issued, first premium paid.",
    },
    {
      title: "Policy Tracking",
      description:
        "Track active policies, renewal dates, and carrier information — all inside your CRM.",
    },
    {
      title: "Referral System",
      description:
        "Track where your referrals come from and automate thank-you sequences for your referral partners.",
    },
    {
      title: "Birthday & Renewal Automations",
      description:
        "Pre-built automations that remember your clients' birthdays and policy anniversaries — so you never miss a touchpoint.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          What&apos;s Coming Next
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          We&apos;re Building This for You — Not Generic Businesses
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Features specifically designed for how financial advisors work. Get in
          now and these land in your account as they ship.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:border-brand-teal/20 transition-colors"
            >
              <span className="absolute top-4 right-4 text-[10px] font-heading font-semibold uppercase tracking-widest text-brand-teal/50 bg-brand-teal/10 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
              <h3 className="font-heading font-semibold text-lg mb-2 pr-20 text-white/90">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
