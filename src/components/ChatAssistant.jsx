import React from 'react';

export default function ChatAssistant({ activeMenu, isChatOpen, setIsChatOpen }) {
  return (
    <aside className={`
      fixed inset-y-0 right-0 z-[110] bg-[#0f172a] border-l border-slate-800 
      transition-all duration-300 flex flex-col
      ${isChatOpen ? 'w-[85vw] md:w-96 translate-x-0 shadow-2xl' : 'w-0 translate-x-full'}
    `}>
      <div className="p-6 border-b border-slate-800 flex justify-between items-center shrink-0">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-white">Agent <span className="text-red-600">{activeMenu}</span></h3>
        
        {/* TOMBOL X UNTUK MENUTUP */}
        <button 
          onClick={() => setIsChatOpen(false)} 
          className="text-slate-500 hover:text-white p-2 transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        <div className="bg-slate-800/50 p-4 rounded-2xl text-[11px] text-slate-300 border border-slate-800">
          Sistem siap menerima instruksi untuk divisi {activeMenu}.
        </div>
      </div>

      <div className="p-4 border-t border-slate-800 shrink-0">
        <input type="text" placeholder="Type..." className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-[11px] outline-none focus:border-red-600 transition-all" />
      </div>
    </aside>
  );
}