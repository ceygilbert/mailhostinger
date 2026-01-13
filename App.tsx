
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string) => {
    // Simulated login for demo purposes
    setUser({
      email,
      name: email.split('@')[0],
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen">
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
