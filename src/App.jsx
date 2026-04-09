import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatAssistant from './components/ChatAssistant';

// Import semua dashboard divisi
import MonitoringDashboard from './components/MonitoringDashboard';
import HRDashboard from './components/HRDashboard';
import FinanceDashboard from './components/FinanceDashboard';
import MarketingDashboard from './components/MarketingDashboard';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Navigasi antar komponen dashboard
  const renderDashboard = () => {
    switch (activeMenu) {
      case 'hr': return <HRDashboard />;
      case 'finance': return <FinanceDashboard />;
      case 'marketing': return <MarketingDashboard />;
      default: return <MonitoringDashboard activeMenu={activeMenu} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden relative font-sans">
      
      {/* 1. SIDEBAR */}
      <div className={`h-full transition-all duration-300 shrink-0 z-20 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <Sidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10">
        
        {/* HEADER - SUDAH BERSIH DARI TOMBOL INITIALIZE AI */}
        <header className="p-4 md:px-8 md:py-6 flex justify-between items-center border-b border-white/5 bg-[#020617]/50 backdrop-blur-xl">
          <div className="flex flex-col">
            <h2 className="text-xl font-black uppercase italic tracking-tighter leading-none">
              {activeMenu} <span className="text-red-600 font-light">/</span> 
              <span className="text-slate-500 font-medium ml-2 uppercase tracking-widest">Console</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Indikator System Status tetap dipertahankan agar header tidak kosong banget */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-white/5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">System Active</span>
            </div>
          </div>
        </header>

        {/* AREA DASHBOARD DINAMIS */}
        <div className="flex-1 overflow-hidden relative">
          {renderDashboard()}
        </div>

        {/* FOOTER */}
        <footer className="px-8 py-3 border-t border-white/5 bg-[#020617]/80 backdrop-blur-md flex justify-between items-center text-[9px] text-slate-600 font-mono tracking-[0.3em] shrink-0 uppercase font-black">
          <div>Secure Connection: Established</div>
          <div className="opacity-50 tracking-[0.5em]">Radikari OS v1.0.4</div>
        </footer>
      </main>

      {/* Chat Assistant Utama (Tetap ada di background) */}
      <ChatAssistant activeMenu={activeMenu} isChatOpen={false} />
    </div>
  );
}