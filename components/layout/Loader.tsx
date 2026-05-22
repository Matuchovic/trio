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
      v += Math.random() * 18 + 4;
      if (v >= 100) { clearInterval(iv); v = 100; setTimeout(() => setOut(true), 500); setTimeout(() => setGone(true), 1500); }
      setPct(Math.min(Math.round(v), 100));
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {!out && (
        <motion.div
          key="loader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center grad-hero overflow-hidden"
        >
          {[160, 260, 360].map((r, i) => (
            <motion.div key={i} className="absolute rounded-full border border-caramel/10"
              style={{ width: r, height: r }}
              animate={{ rotate: 360 }} transition={{ duration: 10 + i * 4, repeat: Infinity, ease: "linear" }} />
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative z-10 text-center">
            <motion.div className="text-7xl mb-6 float inline-block" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 3, repeat: Infinity }}>🍦</motion.div>
            <div className="font-display text-6xl font-light italic text-white tracking-widest mb-1">TRIO</div>
            <div className="label text-caramel/60 mb-10">Mladá Boleslav · est. 2009</div>
            <div className="w-48 mx-auto">
              <div className="h-px bg-white/10 rounded-full overflow-hidden mb-2">
                <motion.div className="h-full bg-caramel rounded-full" animate={{ width: `${pct}%` }} transition={{ duration: 0.15 }} />
              </div>
              <div className="flex justify-between">
                <span className="label text-white/30">Načítám</span>
                <span className="font-mono text-[11px] text-caramel/70">{pct}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
