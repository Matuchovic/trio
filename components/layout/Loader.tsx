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
      v += Math.random() * 16 + 4;
      if (v >= 100) { clearInterval(iv); v = 100; setTimeout(() => setOut(true), 600); setTimeout(() => setGone(true), 1700); }
      setPct(Math.min(Math.round(v), 100));
    }, 85);
    return () => clearInterval(iv);
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {!out && (
        <motion.div key="loader"
          exit={{ clipPath:"inset(0 0 100% 0)", transition:{ duration:1.1, ease:[0.76,0,0.24,1] } }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden grad-dark"
        >
          {/* Rotating orbital rings */}
          {[200,310,420].map((s,i)=>(
            <motion.div key={i} className="absolute rounded-full border"
              style={{ width:s, height:s, borderColor:`rgba(196,117,42,${0.14-i*.04})` }}
              animate={{ rotate:360 }}
              transition={{ duration:12+i*6, repeat:Infinity, ease:"linear" }} />
          ))}

          {/* Ambient glow */}
          <div className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle, rgba(196,117,42,0.12) 0%, transparent 70%)" }} />

          <motion.div
            initial={{ opacity:0, scale:0.85 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
            className="relative z-10 text-center"
          >
            <div className="t-label text-caramel mb-8 tracking-[.5em]">Točená zmrzlina</div>

            <div className="t-display text-[80px] leading-none font-black italic mb-2"
              style={{ color:"var(--cream)" }}>
              TRIO
            </div>

            <div className="t-label mb-14" style={{ color:"rgba(251,245,235,0.35)", letterSpacing:".3em" }}>
              Mladá Boleslav · est. 2009
            </div>

            {/* Progress */}
            <div className="w-40 mx-auto">
              <div className="h-px bg-cream/10 overflow-hidden mb-3">
                <motion.div className="h-full origin-left"
                  style={{ background:"linear-gradient(90deg, var(--caramel), var(--gold))" }}
                  animate={{ scaleX: pct/100 }}
                  transition={{ duration:.15, ease:"linear" }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="t-label" style={{ opacity:.3, letterSpacing:".15em" }}>Načítám</span>
                <span className="font-mono text-[11px]" style={{ color:"var(--caramel)", opacity:.7 }}>{pct}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
