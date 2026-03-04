import React, { useState } from 'react';
import { Header } from './components/Header';
import { EyewearView } from './components/EyewearView';
import { ClothingView } from './components/ClothingView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'eyewear' | 'clothing'>('eyewear');

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'eyewear' ? (
        <EyewearView />
      ) : (
        <ClothingView />
      )}
    </div>
  );
}
