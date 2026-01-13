
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
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${active ? 'bg-[#f0edff] text-[#673DE6] font-black shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-bold'}`}
  >
    <span className={active ? 'text-[#673DE6]' : 'text-gray-400'}>{icon}</span>
    <span className="text-sm tracking-tight">{label}</span>
    {active && <div className="w-2 h-2 bg-[#673DE6] rounded-full ml-auto"></div>}
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
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-10">
          <div className="flex items-center gap-3 mb-14">
            <div className="w-10 h-10 flex items-center justify-center bg-[#673DE6] rounded-xl shadow-lg shadow-purple-200">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V32M28 8V32M12 20H28" stroke="white" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-black text-2xl text-gray-900 tracking-tighter uppercase">Panel</span>
          </div>
          
          <div className="space-y-2">
             <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard Overview" />
             <SidebarItem icon={<Users size={20} />} label="Email Accounts" active />
             <SidebarItem icon={<Mail size={20} />} label="Email Forwarders" />
             <SidebarItem icon={<Shield size={20} />} label="Security Settings" />
             <SidebarItem icon={<Settings size={20} />} label="Panel Configuration" />
          </div>
        </div>

        <div className="mt-auto p-8 border-t border-gray-100">
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 cursor-pointer transition-all group" onClick={onLogout}>
            <div className="w-12 h-12 rounded-2xl bg-[#673DE6] flex items-center justify-center text-white text-lg font-black shadow-inner">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-gray-900 truncate tracking-tight">Admin System</p>
              <p className="text-xs text-gray-400 font-bold truncate tracking-tight">{user.email}</p>
            </div>
            <LogOut size={18} className="text-gray-300 group-hover:text-red-500 transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header bar */}
        <header className="h-24 bg-white border-b border-gray-200 px-12 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter">Manage Email Accounts</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest text-[10px]">Active Domain: sjamperak.org.my</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#673DE6] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search name or address..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#111827] text-white border border-gray-800 rounded-2xl py-4 pl-14 pr-8 w-96 text-sm font-bold focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder-gray-500 shadow-xl"
              />
            </div>
            <button className="bg-[#673DE6] text-white px-8 py-4 rounded-2xl text-sm font-black flex items-center gap-3 hover:bg-[#572ee1] hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] transition-all">
              <Plus size={22} />
              Create Account
            </button>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-12 bg-[#fcfcfd]">
          <div className="max-w-7xl mx-auto">
            {/* Contextual Warning/Info */}
            <div className="mb-12 p-6 bg-purple-50 border border-purple-100 rounded-3xl flex items-center gap-6 shadow-sm">
              <div className="w-14 h-14 bg-[#673DE6] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
                <Shield size={28} />
              </div>
              <div>
                <p className="text-lg font-black text-purple-900 tracking-tight">Enterprise Email Protection Enabled</p>
                <p className="text-sm text-purple-700 font-bold">All accounts for sjamperak.org.my are automatically synced with daily off-site backups.</p>
              </div>
            </div>

            {/* Email Table UI */}
            <div className="bg-white border border-gray-200 rounded-[32px] shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100">
                    <th className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Display Identity</th>
                    <th className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Account Status</th>
                    <th className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Storage Health</th>
                    <th className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Provision Date</th>
                    <th className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredAccounts.map(account => (
                    <tr key={account.id} className="hover:bg-gray-50/40 transition-colors group">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 font-black group-hover:bg-[#f0edff] group-hover:text-[#673DE6] transition-all">
                            {account.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-base font-black text-gray-900 tracking-tight">{account.name}</p>
                            <p className="text-sm text-gray-400 font-bold">{account.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-green-50 text-green-600 border border-green-100 shadow-sm">
                          <CheckCircle2 size={12} strokeWidth={4} />
                          {account.status}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="max-w-[140px]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">{account.usage.split(' / ')[0]} used</span>
                            <span className="text-[10px] font-black text-gray-900 tracking-tight">0%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-[#673DE6] to-[#a855f7] h-full rounded-full transition-all duration-1000 w-0"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-sm font-black text-gray-600 tracking-tight">{account.createdDate}</span>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex justify-end gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setEditingAccount(account)}
                            className="p-3 text-gray-500 hover:text-[#673DE6] hover:bg-purple-50 rounded-2xl transition-all"
                            title="Modify User"
                          >
                            <Edit2 size={20} />
                          </button>
                          <button className="p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all">
                            <Trash2 size={20} />
                          </button>
                          <button className="p-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-all">
                            <MoreVertical size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal Component */}
      {editingAccount && (
        <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-lg z-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-[40px] w-full max-w-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-10 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
              <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tighter">Edit User Profile</h2>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">Domain Security Context</p>
              </div>
              <button onClick={() => setEditingAccount(null)} className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
                <X size={28} />
              </button>
            </div>
            <form onSubmit={handleUpdateAccount} className="p-12 space-y-10">
              <div className="space-y-4">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Full Name Identity</label>
                <input 
                  type="text"
                  value={editingAccount.name}
                  onChange={(e) => setEditingAccount({...editingAccount, name: e.target.value})}
                  className="w-full px-6 py-5 bg-[#111827] text-white border border-gray-800 rounded-3xl focus:ring-4 focus:ring-purple-500/20 outline-none text-xl font-black transition-all shadow-xl"
                  autoFocus
                />
              </div>
              
              <div className="space-y-4 opacity-50">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Locked Email String</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={22} />
                  <input 
                    type="email"
                    value={editingAccount.email}
                    disabled
                    className="w-full px-14 py-5 bg-gray-100 text-gray-500 border border-gray-200 rounded-3xl cursor-not-allowed font-bold"
                  />
                </div>
              </div>

              <div className="flex gap-5 pt-8">
                <button 
                  type="button"
                  onClick={() => setEditingAccount(null)}
                  className="flex-1 py-5 text-sm font-black text-gray-500 border-2 border-gray-100 rounded-3xl hover:bg-gray-50 transition-all"
                >
                  Discard Changes
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-5 text-sm font-black text-white bg-[#673DE6] rounded-3xl hover:bg-[#572ee1] hover:shadow-2xl hover:shadow-purple-500/30 transition-all active:scale-[0.98]"
                >
                  Commit Update
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
