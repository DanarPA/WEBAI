import React from 'react';

export default function MonitoringDashboard() {
  const systemSummary = [
    { 
      id: 'hr', 
      name: 'Human Resources', 
      status: 'Active', 
      metric: '124 Nodes Online', 
      load: 'System Ready', 
      color: 'border-blue-500/30 text-blue-500' 
    },
    { 
      id: 'finance', 
      name: 'Finance & Ledger', 
      status: 'Standby', 
      metric: 'No Data Available', 
      load: 'Pending Connection', 
      color: 'border-slate-700 text-slate-500' 
    },
    { 
      id: 'marketing', 
      name: 'Marketing Engine', 
      status: 'Standby', 
      metric: 'Waiting for Sync', 
      load: 'Link Offline', 
      color: 'border-slate-700 text-slate-500' 
    }
  ];

  // Activity Log yang mencerminkan status pengembangan saat ini
  const logs = [
    { id: 1, time: '15:45:01', type: 'SYS', msg: 'System initialization sequence started', status: 'OK' },
    { id: 2, time: '15:45:10', type: 'NET', msg: 'Attempting connection to Finance database...', status: 'RETRY' },
    { id: 3, time: '15:45:15', type: 'HR', msg: 'Human Resources personnel nodes synchronized', status: 'ACTIVE' },
    { id: 4, time: '15:46:00', type: 'MKT', msg: 'Marketing API link: Handshake timeout', status: 'OFFLINE' },
    { id: 5, time: '15:46:22', type: 'SEC', msg: 'Security firewall level 1 engaged', status: 'STABLE' }
  ];

  return (
    <div className="p-8 h-full overflow-y-auto bg-[#020617] custom-scrollbar">
      {/* HERO SECTION */}
      <div className="mb-10 p-8 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-950 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white">
            System <span className="text-red-600">Pulse</span>
          </h1>
          <p className="text-[10px] font-mono text-slate-500 tracking-[0.5em] uppercase mt-2">
            Global monitoring: Waiting for sync
          </p>
        </div>
      </div>

      {/* SUMMARY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {systemSummary.map((div) => (
          <div key={div.id} className={`bg-slate-900/40 border ${div.color} p-6 rounded-3xl backdrop-blur-sm`}>
            <div className="flex justify-between items-start mb-4">
              <span className="text-[9px] font-black uppercase tracking-widest opacity-30">Unit Registry</span>
              <div className={`w-2 h-2 rounded-full ${div.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`}></div>
            </div>
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-1 text-white">{div.name}</h3>
            <p className="text-[10px] font-mono uppercase font-bold opacity-70">{div.status}</p>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-end">
              <div>
                <p className="text-[8px] text-slate-600 uppercase font-black mb-1">Metric Status</p>
                <p className="text-[10px] text-slate-400 font-bold">{div.metric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ACTIVITY LOG SECTION */}
      <div className="bg-slate-900/20 border border-white/5 rounded-[2rem] p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-red-600 rounded-full"></div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Activity Stream</h4>
          </div>
          <span className="text-[9px] font-mono text-slate-600 animate-pulse">RECORDING LIVE...</span>
        </div>

        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="flex items-center justify-between p-4 bg-[#020617]/50 border border-white/5 rounded-2xl group hover:border-red-500/20 transition-all">
              <div className="flex items-center gap-5">
                <span className="font-mono text-[10px] text-slate-700">{log.time}</span>
                <span className="text-[9px] font-black px-2 py-0.5 border border-white/10 rounded bg-slate-900 text-slate-500 min-w-[40px] text-center">
                  {log.type}
                </span>
                <p className="text-xs text-slate-400 uppercase italic font-medium tracking-wide">
                  {log.msg}
                </p>
              </div>
              <div className={`text-[9px] font-black px-2 py-1 rounded-lg ${
                log.status === 'OK' || log.status === 'ACTIVE' || log.status === 'STABLE' 
                ? 'text-emerald-500 bg-emerald-500/5' 
                : 'text-red-500 bg-red-500/5'
              }`}>
                {log.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}