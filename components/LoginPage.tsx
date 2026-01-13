
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
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fdf2ff] rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f0f7ff] rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3 opacity-50"></div>

      {/* Navigation / Header */}
      <header className="px-8 pt-8 md:px-24 md:pt-16 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center bg-[#673DE6] rounded-xl shadow-lg shadow-purple-200">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V32M28 8V32M12 20H28" stroke="white" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-3xl font-black tracking-tighter uppercase text-gray-900">Hostinger</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:flex-row px-8 md:px-24 py-12 md:py-24 gap-20 md:items-center">
        {/* Login Form Column */}
        <div className="w-full md:w-[460px] shrink-0 bg-white">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900 tracking-tight">Log in to Hostinger Mail</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm font-bold rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <AlertCircle size={20} className="shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-extrabold text-gray-900">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-[#111827] text-white border border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-[#673DE6] transition-all placeholder-gray-500 font-bold"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-extrabold text-gray-900">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-[#111827] text-white border border-gray-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-[#673DE6] transition-all placeholder-gray-500 font-bold"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <a href="#" className="inline-block text-sm font-bold text-[#673DE6] hover:text-[#572ee1] transition-colors">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full py-5 bg-[#673DE6] text-white font-black text-xl rounded-2xl hover:bg-[#572ee1] active:scale-[0.98] transition-all shadow-xl shadow-purple-500/20"
            >
              Login
            </button>
          </form>

          <div className="mt-12 space-y-4">
            <p className="text-sm text-gray-400 font-bold">
              Switch to old <a href="#" className="underline text-gray-600 hover:text-[#673DE6] transition-colors">Webmail platform.</a>
            </p>
            <p className="text-sm text-gray-400 font-bold">
              Don't have an email account? <a href="#" className="underline text-gray-600 hover:text-[#673DE6] transition-colors">See email plans.</a>
            </p>
          </div>
        </div>

        {/* Marketing/Hero Column */}
        <div className="hidden md:block flex-1 max-w-2xl">
          <h2 className="text-7xl font-black leading-[1.05] mb-10 tracking-tighter text-gray-900">
            Professional email,<br />
            <span className="ai-gradient-text">powered by AI</span>
          </h2>
          <p className="text-2xl text-gray-500 mb-14 leading-relaxed font-semibold">
            Secure, reliable, and built for ease — everything you need from business email.
          </p>

          <ul className="space-y-8">
            {[
              "Create a branded email (you@yourdomain.com)",
              "Search, summarize, and write emails with AI",
              "Get advanced security and 99.9% uptime",
              "Use with Hostinger Mail, Gmail, Outlook, and more",
              "Contact support anytime, 24/7"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-5 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="mt-1 shrink-0 w-7 h-7 rounded-full bg-[#00D09C] flex items-center justify-center shadow-lg shadow-green-100">
                  <Check className="text-white" size={18} strokeWidth={4} />
                </div>
                <span className="text-gray-800 font-bold text-xl">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Trustpilot Review Section */}
      <footer className="px-8 md:px-24 pb-12 flex flex-col md:flex-row items-end justify-end mt-auto">
        <div className="flex items-center gap-5 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-gray-100">
          <span className="font-black text-gray-900 text-xl tracking-tight">Excellent</span>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="bg-[#00b67a] p-1.5 rounded-sm">
                <Star fill="white" color="white" size={16} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <span className="underline font-bold text-gray-500 text-base">60,412 reviews on</span>
            <div className="flex items-center gap-1.5 font-black text-gray-900 text-lg tracking-tight">
              <Star fill="#00b67a" color="#00b67a" size={24} />
              Trustpilot
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
