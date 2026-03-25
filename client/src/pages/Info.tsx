import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Info() {
  const [location, navigate] = useLocation();
  const page = new URLSearchParams(location.split("?")[1]).get("page") || "about";

  const content: Record<string, { title: string; content: string }> = {
    about: {
      title: "About BudgetFlow",
      content: `BudgetFlow is a personal finance management platform designed to help you take control of your money. Founded by Anjyl Productions, we believe that financial management should be simple, transparent, and accessible to everyone.

Our Mission
We're on a mission to empower individuals to make better financial decisions through clear insights and intuitive tools. We believe that understanding your spending patterns is the first step toward financial freedom.

Our Story
BudgetFlow was created out of a personal need. Our founders struggled with existing budgeting tools that were either too complex or lacked the insights they needed. So we decided to build something better—a tool that combines powerful analytics with an intuitive interface.

Our Values
- Transparency: We believe in being open about how we work and what we do with your data
- Security: Your financial data is precious, and we protect it with industry-leading security measures
- Simplicity: Financial management shouldn't be complicated
- Innovation: We're constantly improving and adding new features based on user feedback

Our Team
We're a small but passionate team of engineers, designers, and finance experts dedicated to making personal finance management accessible to everyone.`,
    },
    blog: {
      title: "Blog",
      content: `Welcome to the BudgetFlow Blog! Here you'll find articles, tips, and insights about personal finance management in South Africa.

Recent Articles
- Getting Started with BudgetFlow: A beginner's guide to setting up your first budget
- 5 Spending Habits That Are Costing You Money: Learn how to identify and break bad spending patterns
- The Psychology of Money: Understanding your relationship with money
- Smart Saving Strategies: Tips for building an emergency fund
- Budgeting in South African Rands: Tips for managing your finances locally

Stay tuned for more content about budgeting, saving, and personal finance tips. Subscribe to our newsletter to get the latest articles delivered to your inbox.`,
    },
    careers: {
      title: "Careers",
      content: `Join the BudgetFlow Team

We're looking for talented individuals who are passionate about personal finance and technology. If you're interested in joining our team, we'd love to hear from you.

Open Positions
Currently, we don't have any open positions, but we're always interested in hearing from talented individuals. Send your resume and a brief introduction to careers@anjylproductions.com.

Why Work With Us
- Flexible work environment
- Competitive compensation
- Health and wellness benefits
- Opportunity to work on a product that helps millions
- Collaborative and supportive team culture
- Professional development opportunities

Our Culture
We believe in creating a workplace where everyone can do their best work. We value diversity, collaboration, and continuous learning.

Get in Touch
If you're interested in joining our team, please reach out to careers@anjylproductions.com with your resume and a brief introduction about yourself.`,
    },
    press: {
      title: "Press",
      content: `Press Kit

BudgetFlow in the News
We're excited to share that BudgetFlow has been featured in various publications and media outlets. Check back soon for press releases and media coverage.

Press Inquiries
For press inquiries, interviews, or to request a demo, please contact press@anjylproductions.com.

Company Information
- Company Name: Anjyl Productions
- Founded: 2026
- Headquarters: [Location]
- Website: budgetflow.anjylproductions.com

About BudgetFlow
BudgetFlow is a personal finance management platform designed to help individuals take control of their money through clear insights and intuitive tools.

Brand Assets
For logos, screenshots, and other brand assets, please contact our press team at press@anjylproductions.com.`,
    },
    changelog: {
      title: "Changelog",
      content: `BudgetFlow Changelog

Version 1.0.0 - March 2026
- Initial launch of BudgetFlow
- Smart Dashboard with real-time financial overview
- Manual transaction tracking and categorization
- Budget management with alerts
- Analytics and spending insights
- Savings goals tracking
- CSV import functionality
- Mobile-friendly interface
- Secure data encryption
- Support for South African Rands (ZAR)
- Budget template tool

Upcoming Features
- Multi-user accounts and team collaboration
- Advanced CSV import enhancements
- API access for developers
- Custom report generation
- Bill reminders and payment scheduling
- Enhanced analytics and forecasting

We're constantly working on new features and improvements. Check back regularly for updates.`,
    },
    roadmap: {
      title: "Roadmap",
      content: `BudgetFlow Product Roadmap

Q2 2026
- Multi-user accounts and team collaboration
- CSV import enhancements
- Improved mobile app experience
- Custom report generation

Q3 2026
- API access for developers
- Bill reminders and payment scheduling
- Enhanced analytics and forecasting
- Budget templates and presets

Q4 2026
- Recurring transaction management
- Advanced budgeting algorithms
- Community features
- Integration with popular accounting tools

2027 and Beyond
- AI-powered financial recommendations
- Automated savings optimization
- Integration with financial advisors
- Advanced security features
- Expanded reporting capabilities

We're committed to continuously improving BudgetFlow based on user feedback and market needs. This roadmap is subject to change as we prioritize features based on user demand and business needs.

Have a feature request? We'd love to hear from you! Send your suggestions to feedback@anjylproductions.com.`,
    },
  };

  const currentContent = content[page as keyof typeof content] || content.about;

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
            <h1 className="text-xl font-bold">{currentContent.title}</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-bold mb-12">{currentContent.title}</h1>

          <div className="prose prose-invert max-w-none">
            {currentContent.content.split("\n\n").map((paragraph, i) => (
              <div key={i}>
                {paragraph.startsWith("-") ? (
                  <ul className="space-y-2 mb-6 text-slate-300">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item.replace(/^- /, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : paragraph.includes(":") && !paragraph.includes(" ") ? (
                  <h2 className="text-2xl font-bold mt-8 mb-4">{paragraph}</h2>
                ) : (
                  <p className="text-slate-300 leading-relaxed mb-6">{paragraph}</p>
                )}
              </div>
            ))}
          </div>

          {/* Navigation between info pages */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-4">Other pages:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { key: "about", label: "About" },
                { key: "blog", label: "Blog" },
                { key: "careers", label: "Careers" },
                { key: "press", label: "Press" },
                { key: "changelog", label: "Changelog" },
                { key: "roadmap", label: "Roadmap" },
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => navigate(`/info?page=${link.key}`)}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                    page === link.key
                      ? "bg-blue-500 text-white"
                      : "text-blue-400 hover:text-blue-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
