import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

const Dashboard: React.FC = () => {
  const chartData = [
    { name: 'Mon', value: 1000 },
    { name: 'Tue', value: 1200 },
    { name: 'Wed', value: 1100 },
    { name: 'Thu', value: 1400 },
    { name: 'Fri', value: 1300 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Portfolio Value</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">$10,500</p>
              <p className="text-green-600 text-sm mt-2">+5.2% this month</p>
            </div>
            <DollarSign className="w-12 h-12 text-blue-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Gain/Loss</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">$520</p>
              <p className="text-green-600 text-sm mt-2">+4.7% ROI</p>
            </div>
            <TrendingUp className="w-12 h-12 text-green-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Positions</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              <p className="text-blue-600 text-sm mt-2">3 pending</p>
            </div>
            <Target className="w-12 h-12 text-purple-600 opacity-20" />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Portfolio Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
