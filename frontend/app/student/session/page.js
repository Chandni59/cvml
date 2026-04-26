'use client';
import { useEffect, useRef, useState } from 'react';
import { Camera, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Session() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const wsRef = useRef(null);
  const [status, setStatus] = useState('Connecting...');
  const [score, setScore] = useState(0);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    // Start Camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraActive(true);
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setStatus("Camera Error");
      }
    };

    startCamera();

    // Connect WebSocket
    wsRef.current = new WebSocket('ws://127.0.0.1:8000/ws/session');
    
    wsRef.current.onopen = () => {
      console.log('WebSocket connected');
      setStatus('Analyzing');
    };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStatus(data.status);
      setScore(data.attention_score);
    };

    wsRef.current.onclose = () => {
      console.log('WebSocket disconnected');
      setStatus('Disconnected');
    };

    // Send frames
    const interval = setInterval(() => {
      if (wsRef.current?.readyState === WebSocket.OPEN && videoRef.current && canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        canvasRef.current.width = videoRef.current.videoWidth || 640;
        canvasRef.current.height = videoRef.current.videoHeight || 480;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        
        const base64Image = canvasRef.current.toDataURL('image/jpeg', 0.5);
        wsRef.current.send(JSON.stringify({ image: base64Image }));
      }
    }, 1000); // Send frame every 1 second for MVP

    return () => {
      clearInterval(interval);
      if (wsRef.current) wsRef.current.close();
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const getStatusColor = () => {
    if (status === 'Attentive') return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    if (status === 'Distracted') return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    if (status === 'No Face Detected') return 'text-red-400 bg-red-500/10 border-red-500/20';
    return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col p-6">
      <header className="flex justify-between items-center mb-6 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-xl">
            <Activity className="text-blue-400" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-100">Advanced Mathematics</h1>
            <p className="text-xs text-slate-400">Prof. Smith • Live Session</p>
          </div>
        </div>
        <Link href="/student/dashboard" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold transition-all border border-slate-700 hover:border-slate-600 shadow-sm">
          Leave Session
        </Link>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center min-h-[60vh]">
          {!isCameraActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-slate-900/80 backdrop-blur-sm">
              <Camera size={48} className="text-slate-600 mb-4 animate-pulse" />
              <p className="text-slate-400 font-medium">Initializing Camera...</p>
            </div>
          )}
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className="w-full h-full object-cover rounded-3xl transform scale-x-[-1]"
          />
          <canvas ref={canvasRef} className="hidden" />
          
          <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs font-bold text-white tracking-widest">LIVE</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className={`p-8 rounded-3xl border transition-colors duration-500 shadow-lg ${getStatusColor()}`}>
            <h3 className="opacity-80 text-sm font-bold mb-3 uppercase tracking-wider">Current Status</h3>
            <div className="flex items-center gap-4">
              {status === 'Attentive' && <ShieldCheck size={36} />}
              {(status === 'Distracted' || status === 'No Face Detected') && <AlertTriangle size={36} />}
              {(status === 'Connecting...' || status === 'Analyzing') && <Activity size={36} className="animate-spin-slow" />}
              <span className="text-3xl font-black tracking-tight">{status}</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex-1 shadow-lg flex flex-col">
            <h3 className="text-slate-400 text-sm font-bold mb-6 uppercase tracking-wider">Attention Score</h3>
            <div className="flex items-end gap-2 mb-8 mt-auto">
              <span className="text-7xl font-black text-white leading-none">{score}</span>
              <span className="text-3xl text-slate-500 font-bold mb-1">%</span>
            </div>
            
            <div className="w-full bg-slate-950 rounded-full h-6 mb-3 p-1 border border-slate-800 shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="text-xs font-medium text-slate-500 text-right">Analyzing using Edge AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
