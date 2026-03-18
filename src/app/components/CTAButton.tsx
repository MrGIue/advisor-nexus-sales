"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CTAButtonInner({
  href = "#get-started",
  children = "Get Started — $197/month",
  variant = "primary",
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const searchParams = useSearchParams();

  const buildHref = () => {
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];
    const params = new URLSearchParams();
    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) params.set(key, value);
    });
    const query = params.toString();
    return query ? `${href}${href.includes("?") ? "&" : "?"}${query}` : href;
  };

  const baseStyles =
    "inline-block font-heading font-semibold rounded-xl transition-all duration-200 text-center cursor-pointer";
  const variants = {
    primary:
      "bg-brand-teal text-brand-dark px-8 py-4 text-lg hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-brand-teal/20",
    secondary:
      "border-2 border-brand-teal text-brand-teal px-6 py-3 text-base hover:bg-brand-teal/10",
  };

  return (
    <a
      href={buildHref()}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default function CTAButton(props: {
  href?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Suspense
      fallback={
        <a
          href={props.href || "#get-started"}
          className={`inline-block font-heading font-semibold rounded-xl bg-brand-teal text-brand-dark px-8 py-4 text-lg cursor-pointer ${props.className || ""}`}
        >
          {props.children || "Get Started — $197/month"}
        </a>
      }
    >
      <CTAButtonInner {...props} />
    </Suspense>
  );
}
