import React from 'react';
import { LayoutGrid, MessageSquare, TrendingUp, Users, Bell, Settings } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
    <div className="flex items-center gap-2 mb-8">
      <MessageSquare className="w-8 h-8 text-blue-400" />
      <h1 className="text-xl font-bold">CARE-CONNECT</h1>
    </div>
    
    <nav className="space-y-2">
      {[
        { icon: <LayoutGrid className="w-5 h-5" />, label: 'Overview' },
        { icon: <TrendingUp className="w-5 h-5" />, label: 'Analytics' },
        { icon: <Users className="w-5 h-5" />, label: 'Customers' },
        { icon: <Bell className="w-5 h-5" />, label: 'Alerts' },
        { icon: <Settings className="w-5 h-5" />, label: 'Settings' }
      ].map(({ icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-3 w-full p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </nav>
  </div>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  );
}