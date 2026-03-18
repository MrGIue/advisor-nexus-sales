import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-28 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-bold mb-6 text-white/95">
          Your New Office Is Ready
        </h2>
        <p className="text-white/60 text-lg mb-10">
          One platform. One login. Everything you need to grow your practice
          online.
        </p>
        <CTAButton />
      </div>
    </section>
  );
}
