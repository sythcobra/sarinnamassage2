import React from 'react';
import { MessageSquare, Image as ImageIcon, Video, Mic, Sparkles } from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onSelectView: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onSelectView }) => {
  const menuItems = [
    { id: ViewType.CHAT, icon: MessageSquare, label: 'Chat' },
    { id: ViewType.VISION, icon: ImageIcon, label: 'Vision' },
    { id: ViewType.IMAGE_GEN, icon: Sparkles, label: 'Image Gen' },
    { id: ViewType.LIVE, icon: Mic, label: 'Live' },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-deep-800 border-r border-white/5 flex flex-col shrink-0 transition-all duration-300">
      <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gemini-600 to-purple-600 flex items-center justify-center shadow-lg shadow-gemini-500/20">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <span className="ml-3 font-bold text-lg hidden lg:block tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Gemini UI
        </span>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectView(item.id)}
              className={`
                group flex items-center lg:px-4 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-gemini-600/10 text-gemini-500 shadow-sm ring-1 ring-gemini-500/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
              `}
            >
              <div className={`
                p-2 rounded-lg transition-colors
                ${isActive ? 'bg-gemini-500 text-white' : 'bg-transparent group-hover:bg-slate-700'}
              `}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`ml-3 font-medium hidden lg:block ${isActive ? 'text-white' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gemini-500 hidden lg:block shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 hidden lg:block">
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-white/5">
          <h4 className="text-sm font-semibold text-white mb-1">Gemini Pro</h4>
          <p className="text-xs text-slate-400">Experience the next gen AI models.</p>
        </div>
      </div>
    </aside>
  );
};