import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Analysis from './pages/Analysis';
import Alerts from './pages/Alerts';

function App() {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="alerts" element={<Alerts />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
