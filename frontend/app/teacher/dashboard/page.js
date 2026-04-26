import Link from 'next/link';
import { Users, AlertCircle, Activity, ChevronRight, BarChart } from 'lucide-react';

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
            <p className="text-slate-400 mt-1">Advanced Mathematics • Fall 2026</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm">
              <BarChart size={16} /> Reports
            </button>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg shadow-lg">
              T
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                <Users size={24} />
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Active Students</p>
              <h3 className="text-4xl font-bold text-slate-100">24<span className="text-xl text-slate-500 font-medium">/30</span></h3>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Activity size={24} />
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Class Avg Focus</p>
              <h3 className="text-4xl font-bold text-slate-100">82%</h3>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
                <AlertCircle size={24} />
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Distracted Now</p>
              <h3 className="text-4xl font-bold text-amber-400">3</h3>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/50 transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
                <AlertCircle size={24} />
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Absences</p>
              <h3 className="text-4xl font-bold text-red-400">6</h3>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h2 className="text-xl font-bold">Live Student Status</h2>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-slate-400 tracking-wider">LIVE STREAM</span>
            </div>
          </div>
          <div className="p-6 bg-slate-950/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Alex Johnson', status: 'Attentive', score: 95 },
                { name: 'Sarah Smith', status: 'Attentive', score: 88 },
                { name: 'Mike Brown', status: 'Distracted', score: 45 },
                { name: 'Emma Davis', status: 'No Face Detected', score: 0 },
                { name: 'James Wilson', status: 'Attentive', score: 92 },
                { name: 'Olivia Martinez', status: 'Attentive', score: 85 },
                { name: 'William Taylor', status: 'Distracted', score: 30 },
                { name: 'Sophia Anderson', status: 'Attentive', score: 90 },
              ].map((student, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-3 hover:border-slate-700 transition-colors shadow-sm">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-sm text-slate-200">{student.name}</h4>
                    <span className="text-xs font-bold text-slate-500">{student.score}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      student.status === 'Attentive' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' :
                      student.status === 'Distracted' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'
                    }`}></div>
                    <span className="text-xs font-medium text-slate-400">{student.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
