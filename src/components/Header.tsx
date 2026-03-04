import React from 'react';
import { 
  Search, 
  User, 
  Eye, 
  ShoppingBag, 
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeTab: 'eyewear' | 'clothing';
  setActiveTab: (tab: 'eyewear' | 'clothing') => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 lg:px-12 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('eyewear')}>
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Eye className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">VisionFit</h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => setActiveTab('eyewear')}
            className={cn(
              "text-sm font-semibold transition-colors",
              activeTab === 'eyewear' ? "text-primary" : "text-slate-600 hover:text-primary"
            )}
          >
            Trang chủ
          </button>
          <button 
            onClick={() => setActiveTab('clothing')}
            className={cn(
              "text-sm font-semibold transition-colors",
              activeTab === 'clothing' ? "text-primary" : "text-slate-600 hover:text-primary"
            )}
          >
            Bộ sưu tập
          </button>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            Giới thiệu
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <Search className="w-5 h-5 text-slate-600" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 border border-slate-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
