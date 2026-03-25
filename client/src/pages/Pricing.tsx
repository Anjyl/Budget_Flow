import { ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function Pricing() {
  const [, navigate] = useLocation();

  const plans = [
    {
      name: "Free",
      price: "R0",
      description: "Perfect for getting started",
      features: [
        "Up to 100 transactions per month",
        "Basic dashboard",
        "3 spending categories",
        "Monthly reports",
        "Mobile app access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "R99",
      period: "/month",
      description: "For serious budgeters",
      features: [
        "Unlimited transactions",
        "Advanced analytics",
        "Unlimited categories",
        "Weekly reports",
        "Budget alerts",
        "CSV export",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Business",
      price: "R299",
      period: "/month",
      description: "For teams and professionals",
      features: [
        "Everything in Pro",
        "Multi-user accounts",
        "Team collaboration",
        "Advanced integrations",
        "Custom reports",
        "API access",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">Back</span>
            </button>
            <h1 className="text-xl font-bold">Pricing</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-300">
              Choose the plan that works best for you. All prices in South African Rands (ZAR). All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all ${
                  plan.highlighted
                    ? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-2 ring-blue-500/20 scale-105"
                    : "border-slate-700 bg-slate-800/50"
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-slate-400">{plan.period}</span>}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
                        : "border border-slate-600 text-white hover:border-blue-400 hover:text-blue-400"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Need a custom plan?</h3>
            <p className="text-slate-300 mb-6">
              Contact our sales team to discuss enterprise solutions tailored to your needs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
