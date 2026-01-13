
import React, { useState } from 'react';
import { Eye, EyeOff, Check, Star, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Specific credential check as requested
    if (email === 'admin@nonecode.site' && password === 'ZaqwsxCde12345!$') {
      onLogin(email);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white font-sans">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fdf2ff] rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f0f7ff] rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 opacity-60"></div>

      {/* Navigation / Header */}
      <header className="px-8 pt-8 md:px-24 md:pt-12 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center bg-[#673DE6] rounded-lg">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V32M28 8V32M12 20H28" stroke="white" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase text-gray-900">Hostinger</span>
        </div>
      </header>

      {/* Main Hero & Login Section */}
      <main className="flex-1 flex flex-col md:flex-row px-8 md:px-24 py-12 md:py-20 gap-16 md:items-center">
        {/* Left Column: Form */}
        <div className="w-full md:w-[420px] shrink-0">
          <h1 className="text-[28px] font-extrabold mb-10 text-gray-900 tracking-tight">Log in to Hostinger Mail</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm font-medium rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-900">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-gray-900 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6] focus:border-transparent transition-all placeholder-gray-500 font-medium"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2 text-gray-900">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-900 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6] focus:border-transparent transition-all placeholder-gray-500 font-medium"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <a href="#" className="inline-block text-sm font-bold text-[#673DE6] hover:text-[#572ee1] transition-colors">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full py-4 bg-[#673DE6] text-white font-bold text-lg rounded-xl hover:bg-[#572ee1] active:scale-[0.98] transition-all shadow-lg shadow-purple-100"
            >
              Login
            </button>
          </form>

          <div className="mt-12 space-y-4 hidden">
            <p className="text-sm text-gray-500 font-medium">
              Switch to old <a href="#" className="underline text-gray-700 hover:text-[#673DE6]">Webmail platform.</a>
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Don't have an email account? <a href="#" className="underline text-gray-700 hover:text-[#673DE6]">See email plans.</a>
            </p>
          </div>
        </div>

        {/* Right Column: Marketing Content */}
        <div className="hidden md:block flex-1 max-w-2xl">
          <h2 className="text-6xl font-black leading-[1.1] mb-8 tracking-tight text-gray-900">
            Professional email,<br />
            <span className="ai-gradient-text">powered by AI</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
            Secure, reliable, and built for ease — everything you need from business email.
          </p>

          <ul className="space-y-6">
            {[
              "Create a branded email (you@yourdomain.com)",
              "Search, summarize, and write emails with AI",
              "Get advanced security and 99.9% uptime",
              "Use with Hostinger Mail, Gmail, Outlook, and more",
              "Contact support anytime, 24/7"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 animate-in slide-in-from-right duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#00D09C] flex items-center justify-center">
                  <Check className="text-white" size={16} strokeWidth={4} />
                </div>
                <span className="text-gray-800 font-semibold text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Trustpilot Footer */}
      <footer className="px-8 md:px-24 pb-12 flex flex-col md:flex-row items-end justify-end mt-auto">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-3 rounded-2xl shadow-sm border border-gray-100">
          <span className="font-bold text-gray-900 text-lg">Excellent</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="bg-[#00b67a] p-1 rounded-sm">
                <Star fill="white" color="white" size={14} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="underline font-bold text-gray-600 text-sm">60,412 reviews on</span>
            <div className="flex items-center gap-1 font-bold text-gray-900 text-sm">
              <Star fill="#00b67a" color="#00b67a" size={18} />
              Trustpilot
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
