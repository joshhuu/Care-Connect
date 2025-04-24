import React from 'react';
import { MessageSquare, Users, TrendingUp, AlertCircle } from 'lucide-react';
import DashboardLayout from './components/DashboardLayout';
import MetricCard from './components/MetricCard';
import SentimentChart from './components/SentimentChart';

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Conversations"
              value="2,847"
              change="+12.5% from last week"
              icon={MessageSquare}
              trend="up"
            />
            <MetricCard
              title="Active Users"
              value="1,438"
              change="+7.2% from last week"
              icon={Users}
              trend="up"
            />
            <MetricCard
              title="Avg. Response Time"
              value="1.2s"
              change="-0.3s from last week"
              icon={TrendingUp}
              trend="up"
            />
            <MetricCard
              title="Escalations"
              value="24"
              change="+3 from last week"
              icon={AlertCircle}
              trend="down"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Conversations</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={`https://source.unsplash.com/random/40x40?face&${i}`}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">User #{i}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Last message: "Thank you for your help!"
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        Positive
                      </span>
                      <span className="text-xs text-gray-500">2 min ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SentimentChart />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;