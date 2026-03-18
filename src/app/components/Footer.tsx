import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/advisor-nexus-icon.png"
              alt="Advisor Nexus"
              width={32}
              height={32}
            />
            <Image
              src="/by-trained-advisor.svg"
              alt="by Trained Advisor"
              width={120}
              height={24}
              className="h-5 w-auto opacity-70"
            />
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a
              href="#"
              className="hover:text-white/80 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white/80 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:support@trainedadvisor.com"
              className="hover:text-white/80 transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6">
          <p className="text-xs text-white/30 max-w-3xl">
            Advisor Nexus is a product of Trained Advisor. Trained Advisor is
            not a registered investment advisor, broker-dealer, or insurance
            company. We provide marketing tools and technology services. Results
            vary and are not guaranteed.
          </p>
          <p className="text-xs text-white/20 mt-2">
            &copy; {new Date().getFullYear()} Trained Advisor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
