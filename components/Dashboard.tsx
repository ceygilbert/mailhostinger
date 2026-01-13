
import React, { useState } from 'react';
import { 
  Users, Shield, Settings, LogOut, Search, Plus, 
  MoreVertical, Edit2, Trash2, Mail, ExternalLink,
  ChevronRight, CheckCircle2, Info, X, LayoutDashboard
} from 'lucide-react';
import { EmailAccount, User } from '../types';

const INITIAL_ACCOUNTS: EmailAccount[] = [
  {
    id: '1',
    name: 'Beng Lee Tan',
    email: 'benglee.tan@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '2',
    name: 'Peh Kim Hock',
    email: 'kimhock.peh@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '3',
    name: 'Cheang Chee Kin',
    email: 'cheekin.cheang@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '4',
    name: 'Tor Kah Chun',
    email: 'kahchun.tor@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '5',
    name: 'Low Siew Yen',
    email: 'siewyen.low@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '6',
    name: 'Perak Utara (Finance)',
    email: 'sjampu_finance@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
  {
    id: '7',
    name: 'Perak Utara (Cadet)',
    email: 'sjampu_cadet@sjamperak.org.my',
    status: 'Active',
    usage: '0 GB / 10 GB',
    createdDate: '3 Jan 2026'
  },
];

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const SidebarItem: React.FC<{ 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean 
}> = ({ icon, label, active }) => (
  <button 
    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 ${active ? 'bg-[#f0edff] text-[#673DE6] font-black shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-semibold'}`}
  >
    <span className={active ? 'text-[#673DE6]' : 'text-gray-400'}>{icon}</span>
    <span className="text-sm">{label}</span>
    {active && <div className="w-1.5 h-1.5 bg-[#673DE6] rounded-full ml-auto"></div>}
  </button>
);

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [accounts, setAccounts] = useState<EmailAccount[]>(INITIAL_ACCOUNTS);
  const [editingAccount, setEditingAccount] = useState<EmailAccount | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAccounts = accounts.filter(acc => 
    acc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    acc.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAccount) return;
    setAccounts(prev => prev.map(acc => acc.id === editingAccount.id ? editingAccount : acc));
    setEditingAccount(null);
  };

  return (
    <div className="h-screen flex bg-[#f8f9fa] overflow-hidden font-sans text-gray-900">
      {/* Sidebar - Hostinger Panel Inspired */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 flex items-center justify-center bg-[#673DE6] rounded-md">
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V32M28 8V32M12 20H28" stroke="white" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-black text-xl text-gray-900 tracking-tight uppercase">Panel</span>
          </div>
          
          <div className="space-y-1.5">
             <SidebarItem icon={<LayoutDashboard size={18} />} label="Overview" />
             <SidebarItem icon={<Users size={18} />} label="Email Accounts" active />
             <SidebarItem icon={<Mail size={18} />} label="Forwarders" />
             <SidebarItem icon={<Shield size={18} />} label="Anti-Spam" />
             <SidebarItem icon={<Settings size={18} />} label="Webmail Config" />
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors" onClick={onLogout}>
            <div className="w-10 h-10 rounded-full bg-[#673DE6] flex items-center justify-center text-white text-sm font-black shadow-inner">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">Administrator</p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </div>
            <LogOut size={16} className="text-gray-400 group-hover:text-red-500" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Sticky bar */}
        <header className="h-20 bg-white border-b border-gray-200 px-10 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Email Accounts</h1>
            <p className="text-sm text-gray-500 font-medium">Domain: sjamperak.org.my</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#673DE6] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-900 text-white border border-gray-800 rounded-xl py-3 pl-12 pr-6 w-80 text-sm font-medium focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder-gray-500"
              />
            </div>
            <button className="bg-[#673DE6] text-white px-6 py-3 rounded-xl text-sm font-black flex items-center gap-2 hover:bg-[#572ee1] hover:shadow-xl hover:shadow-purple-500/20 active:scale-[0.98] transition-all">
              <Plus size={20} />
              Create Account
            </button>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="max-w-7xl mx-auto">
            {/* Contextual Info Card */}
            <div className="mb-10 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-900">Advanced Security Enabled</p>
                <p className="text-sm text-indigo-700 font-medium">All accounts listed below are protected by Hostinger's AI Phishing Filter and Automated Backups.</p>
              </div>
            </div>

            {/* Account Management Table */}
            <div className="bg-white border border-gray-200 rounded-[24px] shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">User Account</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Status</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Storage Usage</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em]">Creation Date</th>
                    <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredAccounts.map(account => (
                    <tr key={account.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-bold group-hover:bg-[#f0edff] group-hover:text-[#673DE6] transition-colors">
                            {account.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{account.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{account.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-green-50 text-green-600 border border-green-100">
                          <CheckCircle2 size={12} strokeWidth={3} />
                          {account.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="max-w-[120px]">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">{account.usage.split(' / ')[0]}</span>
                            <span className="text-[10px] font-bold text-gray-300">{(parseFloat(account.usage) / 10 * 100).toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-[#673DE6] to-[#a855f7] h-full rounded-full transition-all duration-1000" 
                              style={{ width: `${(parseFloat(account.usage) / 10) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-gray-500">{account.createdDate}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setEditingAccount(account)}
                            className="p-2.5 text-gray-500 hover:text-[#673DE6] hover:bg-purple-50 rounded-xl transition-all"
                            title="Edit Settings"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                            <Trash2 size={18} />
                          </button>
                          <button className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredAccounts.length === 0 && (
                <div className="p-20 text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={32} className="text-gray-200" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">No matches found</h3>
                  <p className="text-sm text-gray-400">Try searching for a different name or email address.</p>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-center">
               <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#673DE6] transition-colors">
                 Show older accounts
                 <ChevronRight size={16} />
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Centered Edit Modal */}
      {editingAccount && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">Account Settings</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Management Console</p>
              </div>
              <button onClick={() => setEditingAccount(null)} className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleUpdateAccount} className="p-10 space-y-8">
              <div className="space-y-3">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Full Name / Display Name</label>
                <input 
                  type="text"
                  value={editingAccount.name}
                  onChange={(e) => setEditingAccount({...editingAccount, name: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-900 text-white border border-gray-800 rounded-2xl focus:ring-4 focus:ring-purple-500/20 outline-none text-lg font-bold transition-all shadow-inner"
                  autoFocus
                />
              </div>
              
              <div className="space-y-3 opacity-60">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Primary Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="email"
                    value={editingAccount.email}
                    disabled
                    className="w-full px-12 py-4 bg-gray-100 text-gray-500 border border-gray-200 rounded-2xl cursor-not-allowed font-semibold"
                  />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-tight pl-2">
                  <Info size={12} />
                  Core identifier cannot be modified
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button 
                  type="button"
                  onClick={() => setEditingAccount(null)}
                  className="flex-1 py-4 text-sm font-black text-gray-500 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all"
                >
                  Discard
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-4 text-sm font-black text-white bg-[#673DE6] rounded-2xl hover:bg-[#572ee1] hover:shadow-xl hover:shadow-purple-500/30 transition-all active:scale-[0.98]"
                >
                  Apply Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
