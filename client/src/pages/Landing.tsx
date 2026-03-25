/*
 * ORIGINAL THEME: Blue gradient with animated blobs
 * Colors: slate-900, blue-400, purple-400, pink-400
 * Layout: Centered hero with animated background elements
 */

import { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Star,
  Wallet,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ─── Intersection Observer hook for scroll animations ───────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Section wrapper with fade-in ────────────────────────────────────────────
function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Asset URLs ───────────────────────────────────────────────────────────────
const HERO_DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475657499/E9vw3twZGLiTs8TUDQzkg7/hero-dashboard-zar-6NuGRcs3Dg2J8hb7xc7fzg.webp";
const FEATURE_ANALYTICS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475657499/E9vw3twZGLiTs8TUDQzkg7/feature-analytics-zar-4bJ97m8RvdMeMePqY2buW9.webp";
const FEATURE_CATEGORIES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475657499/E9vw3twZGLiTs8TUDQzkg7/feature-categories-zar-FBm8SEhJAPf96CkGnXrHVD.webp";

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Smart Dashboard",
    description:
      "Get a complete picture of your finances at a glance. Track income, expenses, and savings with a beautifully designed overview.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Powerful Analytics",
    description:
      "Visualize spending trends over time. Identify patterns, spot opportunities to save, and make informed financial decisions.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Budget Categories",
    description:
      "Organize your spending into custom categories. Set budgets per category and receive alerts before you overspend.",
  },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Transaction Tracking",
      description:
        "Manually log and categorize every transaction with ease. Search, filter, and export your full financial history anytime.",
    },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Savings Goals",
    description:
      "Define savings targets and track your progress. BudgetFlow keeps you motivated with visual milestones.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure & Private",
    description:
      "Your financial data stays yours. We use industry-standard encryption and never sell your information to third parties.",
  },
];



const faqs = [
  {
    q: "Is BudgetFlow free to use?",
    a: "BudgetFlow offers a generous free plan with all core features. Premium plans unlock advanced analytics, unlimited categories, and priority support.",
  },
  {
    q: "How do I import my transactions?",
    a: "You can manually add transactions or import CSV files from your bank. We support all major banks for CSV imports.",
  },
  {
    q: "Is my financial data secure?",
    a: "Absolutely. We use AES-256 encryption for all stored data and TLS for data in transit. We never sell your data or share it with advertisers.",
  },
  {
    q: "Can I use BudgetFlow on my phone?",
    a: "Yes! BudgetFlow is fully responsive and works beautifully on any device. Native mobile apps for iOS and Android are coming soon.",
  },
  {
    q: "Can I export my data?",
    a: "You can export all your transactions and reports as CSV or PDF at any time. Your data is always yours to take with you.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-700">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-base group-hover:text-blue-400 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p className="text-slate-300 pb-5 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

// ─── Main Landing Page ────────────────────────────────────────────────────────
export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BudgetFlow
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Features", id: "features" },
                { label: "How It Works", id: "how-it-works" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo("features")}
                className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors"
              >
                Learn More
              </button>
              <button
                onClick={() => scrollTo("cta")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get Started Free
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700 px-5 py-4 space-y-3">
            {[
              { label: "Features", id: "features" },
              { label: "How It Works", id: "how-it-works" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-sm font-medium text-slate-300 hover:text-blue-400 py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("cta")}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-5 py-3 rounded-lg mt-2"
            >
              Get Started Free
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              {/* Logo and tagline */}
              <div className="flex items-center justify-start gap-3 mb-8">
                <BarChart3 className="h-12 w-12 text-blue-400" />
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BudgetFlow
                </h1>
              </div>

              {/* Headline */}
              <div className="space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Master Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Finances</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-md">
                  Connect your accounts and manage your budget with powerful analytics
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => scrollTo("cta")}
                  className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-7 py-3.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-base"
                >
                  Start for Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo("how-it-works")}
                  className="flex items-center gap-2 border border-slate-500 text-white font-semibold px-7 py-3.5 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all text-base"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
                {["No credit card required", "Free forever plan", "Cancel anytime"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Dashboard mockup */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Decorative border accent */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blue-500/30 rounded-2xl" />
                <img
                  src={HERO_DASHBOARD}
                  alt="BudgetFlow Dashboard"
                  className="relative rounded-2xl shadow-2xl shadow-blue-500/20 w-full"
                  style={{ transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)" }}
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-5 -left-5 bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-700">
                            <p className="text-sm text-slate-400 mb-1">Monthly Savings</p>
                <p className="text-3xl font-bold text-blue-400 mb-1">+R1,240</p>
                  <p className="text-xs text-emerald-400 font-medium">↑ 18% vs last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>



      {/* ── FEATURES ───────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 md:py-32">
        <div className="container">
          {/* Section header */}
          <FadeInSection className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Everything You Need
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Built for Real Financial Life
            </h2>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mx-auto">
              From daily spending to long-term savings goals, BudgetFlow covers every aspect of your personal finances with tools that are both powerful and easy to use.
            </p>
          </FadeInSection>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="group p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="w-11 h-11 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{f.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 md:py-32 bg-slate-800/50">
        <div className="container">
          <FadeInSection className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mx-auto">
              No complicated setup. No financial jargon. Just a clear path to understanding and controlling your money.
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Steps */}
            <div className="space-y-10">
              {[
                {
                  num: "1",
                  title: "Create Your Account",
                  desc: "Sign up in seconds. No credit card required. Start with our free plan and upgrade whenever you're ready.",
                },
                {
                  num: "2",
                  title: "Add Your Transactions",
                  desc: "Import from your bank via CSV, or add transactions manually. BudgetFlow auto-categorizes everything for you.",
                },
                {
                  num: "3",
                  title: "Set Your Budgets",
                  desc: "Define spending limits for each category. BudgetFlow alerts you when you're approaching your limits.",
                },
                {
                  num: "4",
                  title: "Track & Improve",
                  desc: "Review your analytics weekly. Spot trends, celebrate wins, and adjust your budget as your life changes.",
                },
              ].map((step, i) => (
                <FadeInSection key={i} delay={i * 120}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm flex items-center justify-center">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1.5">{step.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Analytics image */}
            <FadeInSection delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-purple-500/20 rounded-2xl" />
                <img
                  src={FEATURE_ANALYTICS}
                  alt="BudgetFlow Analytics"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── FEATURE SPOTLIGHT ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Categories image */}
            <FadeInSection>
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-500/20 rounded-2xl" />
                <img
                  src={FEATURE_CATEGORIES}
                  alt="Budget Categories"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </FadeInSection>

            {/* Text */}
            <FadeInSection delay={150}>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                Smart Categorization
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Know Exactly Where Every Dollar Goes
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                BudgetFlow automatically categorizes your transactions and gives you a clear breakdown of your spending. Create custom categories that match your lifestyle, and set individual budgets for each one.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Auto-categorization with machine learning",
                  "Custom category creation and editing",
                  "Per-category budget limits and alerts",
                  "Visual progress bars for each budget",
                  "Monthly and yearly category comparisons",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("cta")}
                className="group inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
              >
                Start tracking your spending
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeInSection>
          </div>
        </div>
      </section>



      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                Common Questions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Frequently Asked
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Everything you need to know about BudgetFlow. Can't find the answer? Reach out to our support team.
              </p>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
      <section id="cta" className="py-24 md:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Take Control of Your Financial Future
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-xl mx-auto">
                Start building better financial habits today. Reduce stress, achieve your savings goals, and take control of your money with BudgetFlow.
              </p>

              {/* Email signup form (static, no backend) */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <button className="bg-white text-blue-600 font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg text-sm whitespace-nowrap">
                  Get Early Access
                </button>
              </div>

              <p className="text-sm text-blue-100">
                Free forever plan available. No credit card required. Upgrade anytime.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BudgetFlow
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Personal finance management made simple, beautiful, and effective.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Changelog", href: "/info?page=changelog" },
                  { label: "Roadmap", href: "/info?page=roadmap" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About", href: "/info?page=about" },
                  { label: "Blog", href: "/info?page=blog" },
                  { label: "Careers", href: "/info?page=careers" },
                  { label: "Press", href: "/info?page=press" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Privacy Policy", href: "/legal?page=privacy" },
                  { label: "Terms of Service", href: "/legal?page=terms" },
                  { label: "Cookie Policy", href: "/legal?page=cookie" },
                  { label: "Security", href: "/legal?page=security" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-slate-800 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Anjyl Productions. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Built with care for your financial wellbeing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
