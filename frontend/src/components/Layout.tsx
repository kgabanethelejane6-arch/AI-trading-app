import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { logout } from '../store/slices/authSlice';
import { TrendingUp, Home, Briefcase, BarChart3, Bell, LogOut } from 'lucide-react';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white shadow-lg">
        <div className="p-6 flex items-center">
          <TrendingUp className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">AI Trading</h1>
        </div>

        <nav className="mt-8 space-y-2 px-4">
          <a
            href="/"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a
            href="/portfolio"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Briefcase className="w-5 h-5" />
            <span>Portfolio</span>
          </a>
          <a
            href="/analysis"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <BarChart3 className="w-5 h-5" />
            <span>Analysis</span>
          </a>
          <a
            href="/alerts"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition"
          >
            <Bell className="w-5 h-5" />
            <span>Alerts</span>
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 w-64 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-800 transition text-red-400"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
