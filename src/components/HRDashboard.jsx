import React, { useState } from 'react';

export default function HRIntelligence() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Default terbuka di desktop
  const [activeTab, setActiveTab] = useState('recruitment');

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col lg:flex-row text-slate-200 overflow-hidden font-sans">
      
      {/* --- MAIN CONTENT AREA --- */}
      <div className={`flex-1 p-4 md:p-8 overflow-y-auto h-screen custom-scrollbar transition-all duration-300`}>
        <header className="mb-8 flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">
              Open<span className="text-indigo-500">Claw</span> HR
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em]">Integrated Agentic System</p>
          </div>
          
          <div className="flex gap-3">
            {/* Tombol Toggle Chatbot - Muncul kalau Sidebar lagi ketutup */}
            {!isSidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 p-3 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all animate-in fade-in zoom-in"
                title="Buka AI Assistant"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </button>
            )}
            <div className="hidden md:flex bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-xl items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ollama: Online</span>
            </div>
          </div>
        </header>

        {/* TAB NAVIGATION */}
        <div className="flex gap-6 border-b border-slate-800 mb-8 overflow-x-auto pb-2">
          {['Recruitment', 'Pending Approvals', 'System Status'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
              className={`text-[10px] font-black uppercase tracking-widest pb-2 transition-all whitespace-nowrap ${
                activeTab === tab.toLowerCase().replace(' ', '') ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-slate-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT PLACEHOLDER (Sesuai Tab) */}
        <div className="bg-slate-800/10 border border-slate-800 rounded-[40px] p-8 min-h-[400px]">
           <p className="text-[10px] text-slate-500 italic">Content for {activeTab} view goes here...</p>
        </div>
      </div>

      {/* --- SIDEBAR: AGENTIC ASSISTANT (COLLAPSIBLE) --- */}
      <div className={`
        fixed lg:relative inset-y-0 right-0 bg-[#0f172a] border-l border-slate-800/50 flex flex-col z-[60]
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'w-80 md:w-96 translate-x-0' : 'w-0 translate-x-full lg:hidden'}
      `}>
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-slate-800/50 flex items-center justify-between bg-slate-800/5">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
             <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <h3 className="text-[11px] font-black uppercase tracking-widest text-indigo-400">Agentic Assistant</h3>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors"
            title="Tutup Sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar overflow-x-hidden">
          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-3xl rounded-tl-none text-[11px] leading-relaxed text-slate-300">
             Halo! Saya sudah memproses <strong>Pipa Operasional</strong> hari ini. Ada draf kontrak yang perlu Anda review?
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-[#0f172a] border-t border-slate-800/50">
          <input 
            type="text" 
            placeholder="Command AI..." 
            className="w-full bg-slate-800/30 border border-slate-800 rounded-2xl py-4 px-5 text-[11px] focus:outline-none focus:border-indigo-500/50"
          />
        </div>
      </div>

      {/* OVERLAY MOBILE (Klik di luar buat nutup) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[55] lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

    </div>
  );
}