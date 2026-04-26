import Link from 'next/link';
import { ShieldCheck, Eye, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="z-10 text-center max-w-4xl px-6 py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-blue-400 mb-8 shadow-sm">
          <ShieldCheck size={16} />
          <span>Next-Gen Student Monitoring</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Stay Focused. <br /> Learn Better.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Real-time attention tracking powered by advanced AI. Monitor student engagement, analyze behaviors, and improve learning outcomes seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/login" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto">
            Get Started
          </Link>
          <Link href="#features" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-all border border-slate-700 hover:border-slate-600 w-full sm:w-auto">
            View Features
          </Link>
        </div>

        <div id="features" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-200">Real-Time Tracking</h3>
            <p className="text-slate-400 leading-relaxed">Instantly monitor student attention using edge AI and facial landmark detection.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-200">Live Analytics</h3>
            <p className="text-slate-400 leading-relaxed">Detailed dashboards providing instant feedback on class engagement and focus metrics.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-200">Privacy First</h3>
            <p className="text-slate-400 leading-relaxed">All video streams are processed instantly without saving sensitive facial data.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
