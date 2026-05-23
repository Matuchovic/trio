"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr:false });

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] });
  const ty  = useTransform(scrollYProgress, [0,1], ["0%","20%"]);
  const op  = useTransform(scrollYProgress, [0,.7], [1,0]);
  const sc  = useTransform(scrollYProgress, [0,1], [1,.94]);

  const words = ["Tři", "příchutě,", "jeden"];

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden grad-dark">
      {/* Three.js */}
      <HeroScene />

      {/* Ambient orbs */}
      {[
        { r:700, x:"25%",  y:"45%", c:"rgba(196,117,42,.11)" },
        { r:500, x:"78%",  y:"22%", c:"rgba(212,64,106,.07)" },
        { r:380, x:"55%",  y:"78%", c:"rgba(74,158,106,.06)" },
      ].map((b,i)=>(
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:b.r, height:b.r, left:b.x, top:b.y, transform:"translate(-50%,-50%)",
            background:`radial-gradient(circle, ${b.c}, transparent 70%)` }}
          animate={{ scale:[1,1.12,1], opacity:[.7,1,.7] }}
          transition={{ duration:7+i*2.5, repeat:Infinity, ease:"easeInOut", delay:i*1.5 }} />
      ))}

      {/* Sun graphic */}
      <div className="absolute top-14 right-14 md:top-20 md:right-20 opacity-15 pointer-events-none select-none">
        <svg width="180" height="180" viewBox="0 0 180 180" className="spin-s">
          {Array.from({length:24}).map((_,i)=>(
            <line key={i} x1="90" y1="90"
              x2={90+78*Math.cos(i*15*Math.PI/180)} y2={90+78*Math.sin(i*15*Math.PI/180)}
              stroke="var(--gold)" strokeWidth={i%2?1:1.5} strokeLinecap="round" opacity={i%2?.35:1} />
          ))}
          <circle cx="90" cy="90" r="22" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Content */}
      <motion.div style={{ y:ty, opacity:op, scale:sc }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">

        {/* Label badge */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:.8, delay:.15 }}
          className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-16">
          <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background:"var(--pista)" }}
            animate={{ scale:[1,1.8,1], opacity:[1,.3,1] }} transition={{ duration:2, repeat:Infinity }} />
          <span className="t-label" style={{ letterSpacing:".25em", opacity:.65 }}>
            Mladá Boleslav · Otevřeno 10–20
          </span>
        </motion.div>

        {/* Giant heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1 className="t-display font-black italic leading-none text-cream"
            style={{ fontSize:"clamp(80px,18vw,220px)" }}
            initial={{ y:"105%" }} animate={{ y:0 }}
            transition={{ duration:1.1, delay:.25, ease:[0.22,1,0.36,1] }}>
            TRIO
          </motion.h1>
        </div>

        {/* Sub heading word reveal */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mb-6">
          {words.map((w,i)=>(
            <div key={i} className="overflow-hidden">
              <motion.span className="inline-block t-display font-light italic text-cream/60"
                style={{ fontSize:"clamp(22px,4vw,52px)" }}
                initial={{ y:"100%" }} animate={{ y:0 }}
                transition={{ duration:.9, delay:.5+i*.1, ease:[0.22,1,0.36,1] }}>
                {w}
              </motion.span>
            </div>
          ))}
          <div className="overflow-hidden">
            <motion.span className="inline-block t-display font-bold italic grad-text"
              style={{ fontSize:"clamp(22px,4vw,52px)" }}
              initial={{ y:"100%" }} animate={{ y:0 }}
              transition={{ duration:.9, delay:.8, ease:[0.22,1,0.36,1] }}>
              nezapomenutelný zážitek.
            </motion.span>
          </div>
        </div>

        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.05 }}
          className="t-body text-cream/40 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-16">
          Belgická čokoláda · Madagaskarská vanilka · Čerstvá jahoda.<br/>
          Denně čerstvé. Ze surovin nejvyšší kvality.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2 }}
          className="flex flex-wrap items-center justify-center gap-5">
          <motion.a href="#prichute"
            whileHover={{ scale:1.05, boxShadow:"0 20px 60px rgba(196,117,42,.4)" }}
            whileTap={{ scale:.97 }}
            className="btn-gold px-10 py-4 rounded-full inline-block"
            style={{ textDecoration:"none", boxShadow:"0 8px 32px rgba(196,117,42,.25)" }}>
            Prozkoumat příchutě
          </motion.a>
          <motion.a href="#menu"
            whileHover={{ scale:1.05, borderColor:"rgba(212,175,55,.4)", color:"var(--gold)" }}
            whileTap={{ scale:.97 }}
            className="glass px-10 py-4 rounded-full text-cream/60 text-[11px] font-bold tracking-[.12em] uppercase inline-block transition-all"
            style={{ textDecoration:"none" }}>
            Naše menu
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
          className="flex justify-center gap-12 md:gap-20 mt-24 pt-10"
          style={{ borderTop:"1px solid rgba(212,175,55,.1)" }}>
          {[{n:"15+",l:"let tradice"},{n:"4.9",l:"průměrné skóre"},{n:"30+",l:"sezónních příchutí"},{n:"∞",l:"spokojených zákazníků"}].map((s,i)=>(
            <motion.div key={i} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:1.6+i*.08 }} className="text-center">
              <div className="t-display text-2xl md:text-3xl italic font-bold" style={{ color:"var(--caramel)" }}>{s.n}</div>
              <div className="t-label mt-1" style={{ letterSpacing:".18em", opacity:.35 }}>{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="t-label" style={{ opacity:.25, letterSpacing:".3em" }}>Scroll</span>
        <motion.div className="w-px h-14 origin-top rounded-full"
          style={{ background:"linear-gradient(to bottom, var(--caramel), transparent)" }}
          animate={{ scaleY:[0,1,0] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }} />
      </motion.div>
    </section>
  );
}
