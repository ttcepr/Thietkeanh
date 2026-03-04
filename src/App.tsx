import React, { useState } from 'react';
import { Header } from './components/Header';
import { EyewearView } from './components/EyewearView';
import { ClothingView } from './components/ClothingView';
import { Login } from './components/Login';
import { ToastProvider } from './components/Toast';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'eyewear' | 'clothing'>('eyewear');

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background-light font-display text-slate-900">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'eyewear' ? (
          <EyewearView />
        ) : (
          <ClothingView />
        )}
      </div>
    </ToastProvider>
  );
}
