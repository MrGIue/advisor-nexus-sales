import CTAButton from "./CTAButton";

export default function PricingCard() {
  const bullets = [
    "Full CRM with unlimited contacts & users",
    "Built-in calendars with video calling integration",
    "Funnel & landing page builder",
    "Email marketing & social media planner",
    "Workflow automations",
    "Video guides & documentation",
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-brand-teal/30 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,196,182,0.06),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-heading font-bold text-2xl mb-2 text-white/95">
              Advisor Nexus
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Everything you need to run your practice online
            </p>

            <div className="mb-8">
              <span className="text-5xl font-heading font-bold text-brand-teal">
                $197
              </span>
              <span className="text-white/50 text-lg">/month</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <span className="text-brand-teal mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <CTAButton className="w-full" />

            <p className="mt-4 text-xs text-white/30">
              No free trial. No long-term contract. Cancel anytime.
            </p>
            <p className="mt-1 text-xs text-white/20">
              All sales are final. We recommend reviewing this page thoroughly
              before purchasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
