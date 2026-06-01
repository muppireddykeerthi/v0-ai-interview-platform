import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "forever",
    features: [
      "5 practice sessions per month",
      "Basic question library",
      "Text-based feedback",
      "Progress tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Best for active job seekers",
    price: "$19",
    period: "per month",
    features: [
      "Unlimited practice sessions",
      "Full question library",
      "AI-powered voice analysis",
      "Video recording & playback",
      "Detailed performance analytics",
      "Custom interview scenarios",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Custom question banks",
      "API access",
      "Dedicated support",
      "SSO integration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">Pricing</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose the plan that fits your interview preparation needs.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-xl border p-6 ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/login">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
