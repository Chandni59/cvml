import Link from 'next/link';
import { Play, Clock, Activity, Target } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
            <p className="text-slate-400 mt-1">Welcome back, Alex. Ready to focus?</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg shadow-lg">
            A
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                <Target size={24} />
              </div>
              <span className="text-xs font-medium bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full">Today</span>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Avg Focus Score</p>
              <h3 className="text-4xl font-bold text-slate-100">87%</h3>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                <Clock size={24} />
              </div>
              <span className="text-xs font-medium bg-indigo-500/20 text-indigo-400 px-2.5 py-1 rounded-full">This Week</span>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Study Time</p>
              <h3 className="text-4xl font-bold text-slate-100">12h 45m</h3>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Activity size={24} />
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Current Status</p>
              <h3 className="text-2xl font-bold text-emerald-400">Ready</h3>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-800/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-all duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Join Next Session</h2>
              <p className="text-blue-200">Advanced Mathematics - Starts in 5 mins</p>
            </div>
            <Link 
              href="/student/session" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3 hover:scale-105"
            >
              <Play fill="currentColor" size={20} />
              Start Camera & Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
