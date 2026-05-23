"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let v = 0;
    const iv = setInterval(() => {
      v += Math.random() * 20 + 5;
      if (v >= 100) { clearInterval(iv); v = 100; setTimeout(() => setOut(true), 400); setTimeout(() => setGone(true), 1400); }
      setPct(Math.min(Math.round(v), 100));
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {!out && (
        <motion.div key="loader" exit={{ y: "-100%" }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #FF4757 40%, #FF9F43 100%)" }}>

          {/* Floating blobs */}
          {[{w:300,x:"10%",y:"20%",c:"rgba(255,255,255,0.12)"},{w:200,x:"75%",y:"60%",c:"rgba(255,255,255,0.08)"},{w:150,x:"50%",y:"10%",c:"rgba(255,255,255,0.1)"}].map((b,i)=>(
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width:b.w, height:b.w, left:b.x, top:b.y, background:b.c }}
              animate={{ scale:[1,1.2,1], y:[0,-20,0] }} transition={{ duration:3+i, repeat:Infinity, ease:"easeInOut", delay:i*0.5 }} />
          ))}

          {/* Content */}
          <motion.div initial={{ scale:0, rotate:-10 }} animate={{ scale:1, rotate:0 }}
            transition={{ type:"spring", stiffness:200, damping:15 }} className="relative z-10 text-center">
            <div className="text-[80px] mb-4">🍦</div>
            <div className="font-display text-6xl font-semibold text-white mb-1 tracking-wide">TRIO</div>
            <div className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-10">Točená zmrzlina · Mladá Boleslav</div>

            {/* Progress */}
            <div className="w-52 mx-auto">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-3">
                <motion.div className="h-full bg-white rounded-full" animate={{ width:`${pct}%` }} transition={{ duration:0.15 }} />
              </div>
              <div className="flex justify-between text-white/60 text-xs font-bold">
                <span>Připravujeme zážitek…</span>
                <span>{pct}%</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom emoji strip */}
          <div className="absolute bottom-8 flex gap-6 text-3xl">
            {["🍓","🍫","🌿","🌰","🥭","🍯"].map((e,i)=>(
              <motion.span key={i} animate={{ y:[0,-8,0] }} transition={{ duration:1.5, repeat:Infinity, delay:i*0.2 }}>{e}</motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
