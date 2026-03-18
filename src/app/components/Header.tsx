import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/advisor-nexus-logo.png"
            alt="Advisor Nexus"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>
        <CTAButton
          variant="secondary"
          className="hidden sm:inline-block text-sm px-4 py-2"
        >
          Get Started
        </CTAButton>
      </div>
    </header>
  );
}
