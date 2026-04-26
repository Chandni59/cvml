'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'student') {
      router.push('/student/dashboard');
    } else {
      router.push('/teacher/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-blue-500 font-bold text-xl mb-4 tracking-wider">
            FOCUS<span className="text-slate-200">AI</span>
          </Link>
          <h2 className="text-3xl font-bold text-slate-50 tracking-tight">Welcome Back</h2>
          <p className="text-slate-400 mt-2">Sign in to continue to your dashboard.</p>
        </div>
        
        <div className="flex bg-slate-950 rounded-xl p-1 mb-8">
          <button 
            onClick={() => setRole('student')}
            className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${role === 'student' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <User size={16} /> Student
            </div>
          </button>
          <button 
            onClick={() => setRole('teacher')}
            className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${role === 'teacher' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <BookOpen size={16} /> Teacher
            </div>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all flex items-center justify-center gap-2 mt-4"
          >
            Sign In <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
