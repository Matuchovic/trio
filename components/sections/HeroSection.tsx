"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["0%","22%"]);
  const opacity = useTransform(scrollYProgress, [0,0.7], [1,0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden grad-hero">
      <HeroScene />

      {/* Ambient blobs */}
      {[{c:"rgba(196,117,42,0.18)",x:"18%",y:"45%",w:700},{c:"rgba(232,82,106,0.12)",x:"76%",y:"22%",w:500},{c:"rgba(74,191,160,0.08)",x:"55%",y:"78%",w:400}].map((b,i)=>(
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:b.w, height:b.w, left:b.x, top:b.y, background:`radial-gradient(circle,${b.c},transparent 70%)`, transform:"translate(-50%,-50%)" }}
          animate={{ scale:[1,1.15,1], opacity:[0.6,1,0.6] }}
          transition={{ duration:6+i*2, repeat:Infinity, ease:"easeInOut", delay:i*1.5 }} />
      ))}

      {/* Sun */}
      <div className="absolute top-16 right-12 md:top-24 md:right-20 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" className="spin-slow">
          {Array.from({length:18}).map((_,i)=>(
            <line key={i} x1="100" y1="100"
              x2={100+88*Math.cos((i*20*Math.PI)/180)} y2={100+88*Math.sin((i*20*Math.PI)/180)}
              stroke="#C4752A" strokeWidth="1.5" strokeLinecap="round" opacity={i%2?0.4:1} />
          ))}
          <circle cx="100" cy="100" r="28" fill="none" stroke="#C4752A" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity:0, y:24, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.8, delay:0.15 }}
          className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-14">
          <motion.span className="w-1.5 h-1.5 rounded-full bg-pistachio"
            animate={{ scale:[1,1.6,1], opacity:[0.8,0.3,0.8] }} transition={{ duration:2, repeat:Infinity }} />
          <span className="label text-white/60">Mladá Boleslav · Otevřeno dnes 10–20 hod</span>
        </motion.div>

        {/* Big TRIO */}
        <div className="overflow-hidden mb-4">
          <motion.div className="font-display text-[20vw] md:text-[16vw] leading-none text-white font-light italic"
            initial={{ y:"105%" }} animate={{ y:0 }} transition={{ duration:1.2, delay:0.2, ease:[0.22,1,0.36,1] }}>
            TRIO
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6">
          {["Točená","zmrzlina,","tři","příchutě."].map((w,i)=>(
            <div key={i} className="overflow-hidden">
              <motion.span className="inline-block font-display font-light text-2xl md:text-4xl italic text-white/65"
                initial={{ y:"100%" }} animate={{ y:0 }} transition={{ duration:0.9, delay:0.5+i*0.1, ease:[0.22,1,0.36,1] }}>
                {i===2 ? <span className="grad-text not-italic font-semibold">{w}</span> : w}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1 }}
          className="text-white/40 text-base md:text-xl max-w-lg mx-auto leading-relaxed mb-16">
          Belgická čokoláda · Madagaskarská vanilka · Čerstvá jahoda.<br />
          Každý den čerstvě, ze surovin nejvyšší kvality.
        </motion.p>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <motion.a href="#prichute" whileHover={{ scale:1.06, boxShadow:"0 20px 50px rgba(196,117,42,0.45)" }} whileTap={{ scale:0.97 }}
            className="shimmer text-white px-10 py-4 rounded-full text-[15px] font-semibold tracking-wide"
            style={{ textDecoration:"none", boxShadow:"0 8px 32px rgba(196,117,42,0.3)" }}>
            Prozkoumat příchutě ↓
          </motion.a>
          <motion.a href="#menu" whileHover={{ scale:1.06, borderColor:"rgba(196,117,42,0.5)", color:"var(--caramel)" }} whileTap={{ scale:0.97 }}
            className="px-10 py-4 rounded-full text-[15px] font-medium text-white/60 border border-white/15 hover:text-caramel transition-all"
            style={{ textDecoration:"none" }}>
            Zobrazit menu
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6 }}
          className="flex justify-center gap-10 md:gap-16 mt-20 pt-10 border-t border-white/[0.07]">
          {[{n:"15+",l:"let tradice"},{n:"4.9★",l:"průměrné skóre"},{n:"30+",l:"sezónních příchutí"},{n:"∞",l:"spokojených zákazníků"}].map((s,i)=>(
            <motion.div key={i} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.7+i*0.1 }} className="text-center">
              <div className="font-display text-2xl md:text-3xl italic" style={{ color:"var(--caramel)" }}>{s.n}</div>
              <div className="label text-white/30 mt-1">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="label text-white/20">Scroll</span>
        <motion.div className="w-px h-12 origin-top rounded-full"
          style={{ background:"linear-gradient(to bottom, var(--caramel), transparent)" }}
          animate={{ scaleY:[0,1,0] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }} />
      </motion.div>
    </section>
  );
}
