export default function FeatureCalendars() {
  const bullets = [
    "Personal calendars, round-robin booking, class scheduling — all built in. No Calendly required.",
    "Send your booking link to prospects or embed it on your website. They pick a time, it's done.",
    "Connect your Zoom, Microsoft Teams, or Google Meet account. When someone books, the video link creates itself.",
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-3">
          Your Calendars
        </p>
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-4 text-white/95">
          When a Prospect Books a Call, You Just Show Up
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          The Zoom link creates itself, lands in both calendars, and they get a
          reminder. That&apos;s it.
        </p>

        {/* Highlighted callout — the "you just show up" moment */}
        <div className="bg-brand-teal/[0.06] border border-brand-teal/20 rounded-2xl p-8 sm:p-10 mb-8">
          <p className="text-brand-teal font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Automatic Reminders
          </p>
          <p className="text-xl sm:text-2xl font-heading font-bold text-white/95 mb-3">
            Prospects get reminded about their appointment automatically.
          </p>
          <p className="text-white/60 text-lg">
            You just show up.
          </p>
        </div>

        {/* Supporting bullet points */}
        <ul className="space-y-4 max-w-3xl">
          {bullets.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-white/60"
            >
              <span className="text-brand-teal mt-1 shrink-0 text-lg">
                &#10003;
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
