import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Legal() {
  const [location, navigate] = useLocation();
  const page = new URLSearchParams(location.split("?")[1]).get("page") || "privacy";

  const content: Record<string, { title: string; sections: Array<{ heading: string; text: string }> }> = {
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Introduction",
          text: "BudgetFlow (\"we\", \"us\", \"our\") operates the BudgetFlow website and service. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.",
        },
        {
          heading: "Information Collection and Use",
          text: "We collect several different types of information for various purposes to provide and improve our service to you.",
        },
        {
          heading: "Types of Data Collected",
          text: "Personal Data: While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). This may include: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data.",
        },
        {
          heading: "Use of Data",
          text: "BudgetFlow uses the collected data for various purposes: To provide and maintain our service, To notify you about changes to our service, To allow you to participate in interactive features of our service, To provide customer support, To gather analysis or valuable information so that we can improve our service.",
        },
        {
          heading: "Security of Data",
          text: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
        },
        {
          heading: "Contact Us",
          text: "If you have any questions about this Privacy Policy, please contact us at privacy@anjylproductions.com.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "Agreement to Terms",
          text: "By accessing and using the BudgetFlow website and service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          heading: "Use License",
          text: "Permission is granted to temporarily download one copy of the materials (information or software) on BudgetFlow for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.",
        },
        {
          heading: "Disclaimer",
          text: "The materials on BudgetFlow are provided on an 'as is' basis. BudgetFlow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          heading: "Limitations",
          text: "In no event shall BudgetFlow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the BudgetFlow website.",
        },
        {
          heading: "Accuracy of Materials",
          text: "The materials appearing on BudgetFlow could include technical, typographical, or photographic errors. BudgetFlow does not warrant that any of the materials on its website are accurate, complete, or current. BudgetFlow may make changes to the materials contained on its website at any time without notice.",
        },
        {
          heading: "Links",
          text: "BudgetFlow has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BudgetFlow of the site. Use of any such linked website is at the user's own risk.",
        },
      ],
    },
    cookie: {
      title: "Cookie Policy",
      sections: [
        {
          heading: "What Are Cookies",
          text: "Cookies are small pieces of data stored on your browser or device. They help us remember your preferences and improve your experience on our website.",
        },
        {
          heading: "Types of Cookies We Use",
          text: "Essential Cookies: Required for the website to function properly. Analytics Cookies: Help us understand how you use our website. Preference Cookies: Remember your choices and settings. Marketing Cookies: Used to track your activity across websites.",
        },
        {
          heading: "How We Use Cookies",
          text: "We use cookies to: Authenticate users, Remember your preferences, Analyze website traffic, Improve website functionality, Deliver personalized content.",
        },
        {
          heading: "Managing Cookies",
          text: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.",
        },
        {
          heading: "Third-Party Cookies",
          text: "We may allow third parties to place cookies on your device for analytics and advertising purposes. These third parties have their own privacy policies governing their use of cookies.",
        },
      ],
    },
    security: {
      title: "Security",
      sections: [
        {
          heading: "Our Security Commitment",
          text: "At BudgetFlow, we take the security of your financial data seriously. We implement industry-standard security measures to protect your information.",
        },
        {
          heading: "Data Encryption",
          text: "All data transmitted between your device and our servers is encrypted using TLS (Transport Layer Security) 1.2 or higher. Sensitive data stored on our servers is encrypted using AES-256 encryption.",
        },
        {
          heading: "Access Controls",
          text: "We implement strict access controls to ensure that only authorized personnel can access your data. All access is logged and monitored for suspicious activity.",
        },
        {
          heading: "Regular Security Audits",
          text: "We conduct regular security audits and penetration testing to identify and address potential vulnerabilities. Our systems are regularly updated with the latest security patches.",
        },
        {
          heading: "Incident Response",
          text: "In the event of a security breach, we have a comprehensive incident response plan in place. We will notify affected users promptly and take appropriate action to mitigate any damage.",
        },
        {
          heading: "Compliance",
          text: "BudgetFlow complies with relevant data protection regulations including GDPR, CCPA, and other applicable privacy laws.",
        },
      ],
    },
  };

  const currentContent = content[page as keyof typeof content] || content.privacy;

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
          <h1 className="text-5xl font-bold mb-2">{currentContent.title}</h1>
          <p className="text-slate-400 mb-12">Last updated: March 2026</p>

          <div className="space-y-12">
            {currentContent.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <p className="text-slate-300 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation between legal pages */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-4">Other legal documents:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { key: "privacy", label: "Privacy Policy" },
                { key: "terms", label: "Terms of Service" },
                { key: "cookie", label: "Cookie Policy" },
                { key: "security", label: "Security" },
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => navigate(`/legal?page=${link.key}`)}
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
