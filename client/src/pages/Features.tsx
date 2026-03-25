import { ArrowLeft, BarChart3, TrendingUp, PieChart, Layers, Wallet, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";

export default function Features() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Dashboard",
      description:
        "Get a complete picture of your finances at a glance. Track income, expenses, and savings with a beautifully designed overview that updates in real-time.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Powerful Analytics",
      description:
        "Visualize spending trends over time with interactive charts and graphs. Identify patterns, spot opportunities to save, and make informed financial decisions.",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Budget Categories",
      description:
        "Organize your spending into custom categories. Set budgets per category and receive alerts before you overspend.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Transaction Tracking",
      description:
        "Manually log and categorize every transaction with ease. Search, filter, and export your full financial history anytime.",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Savings Goals",
      description:
        "Define savings targets and track your progress. BudgetFlow keeps you motivated with visual milestones and achievement tracking.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your financial data stays yours. We use industry-standard encryption and never sell your information to third parties.",
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
            <h1 className="text-xl font-bold">Features</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4">All the Tools You Need</h1>
            <p className="text-xl text-slate-300">
              BudgetFlow provides a complete suite of features to help you manage your personal finances effectively. All in South African Rands (ZAR).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
