import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-dark-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,196,182,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src="/advisor-nexus-logo.png"
            alt="Advisor Nexus"
            width={240}
            height={60}
            className="h-12 sm:h-14 w-auto"
            priority
          />
        </div>
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/by-trained-advisor.svg"
            alt="by Trained Advisor"
            width={140}
            height={28}
            className="h-5 w-auto opacity-60"
          />
        </div>

        <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight mb-6 text-white/95">
          The Only Platform Built for Financial Advisors Who Want to Grow Online
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-body">
          Your CRM, calendars, funnels, email marketing, and social media
          management — all in one place. Built specifically for your practice.
        </p>

        <CTAButton />

        <p className="mt-4 text-sm text-white/40">
          No free trial. No long-term contract. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
