"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { flavors } from "@/lib/data";

const stars = (n: number) => "★".repeat(n);

function FlavorCard({ f, index }: { f: typeof flavors[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const [hov, setHov] = useState(false);

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:60, rotate:-2 }}
      animate={inView ? { opacity:1, y:0, rotate:0 } : {}}
      transition={{ duration:0.8, delay:index*0.1, ease:[0.22,1,0.36,1] }}>
      <motion.div
        className="relative rounded-3xl overflow-hidden cursor-none"
        whileHover={{ y:-10, rotate: index%2===0 ? 1 : -1 }}
        transition={{ duration:0.4, ease:[0.23,1,0.32,1] }}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        style={{ boxShadow: hov ? `0 32px 64px ${f.color}50` : "0 4px 24px rgba(0,0,0,0.08)" }}
      >
        {/* Top visual */}
        <div className="relative h-56 flex flex-col items-center justify-center overflow-hidden" style={{ background:f.bg }}>
          {/* Bubble pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 224">
            {Array.from({length:8}).map((_,i)=>Array.from({length:4}).map((_,j)=>(
              <circle key={`${i}-${j}`} cx={i*55} cy={j*75} r="22" fill="white"/>
            )))}
          </svg>

          {/* Tag badge */}
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {f.tag2}
          </div>

          {/* Number */}
          <div className="absolute top-3 right-4 font-display text-5xl font-bold text-white/15">{f.num}</div>

          {/* Big emoji */}
          <motion.div className="text-[88px] leading-none select-none mb-2"
            animate={{ y:[0,-8,0], rotate: hov ? [0,-5,5,0] : 0 }}
            transition={{ y:{ duration:3, repeat:Infinity, ease:"easeInOut", delay:index*0.3 }, rotate:{ duration:0.6 } }}
            style={{ filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.3))" }}>
            {f.emoji}
          </motion.div>

          {/* EN name bottom */}
          <div className="absolute bottom-3 left-0 right-0 text-center text-white/50 text-[10px] font-bold uppercase tracking-widest">{f.en}</div>

          {/* Hover shine */}
          <motion.div className="absolute inset-0 pointer-events-none"
            animate={{ opacity: hov ? 1 : 0 }}
            style={{ background:"radial-gradient(circle at 50% 40%, rgba(255,255,255,0.15), transparent 65%)" }} />
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow text-sm font-bold">{stars(5)}</span>
            <span className="text-xs font-bold" style={{ color:f.color }}>{f.rating}</span>
            <span className="text-xs text-gray-400">({f.reviews.toLocaleString()} recenzí)</span>
          </div>

          <h3 className="font-display text-xl font-semibold mb-2" style={{ color:"#2D1B10" }}>{f.name}</h3>
          <p className="text-[13px] leading-relaxed mb-4" style={{ color:"#6B4226", opacity:0.85 }}>{f.desc}</p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-dashed" style={{ borderColor:`${f.color}20` }}>
            <div>
              <span className="font-display text-3xl font-bold" style={{ color:f.color }}>{f.price}</span>
              <span className="text-sm font-bold ml-1 opacity-50">Kč</span>
            </div>
            <motion.button whileHover={{ scale:1.08 }} whileTap={{ scale:0.95 }}
              className="text-white text-[13px] font-bold px-5 py-2.5 rounded-full cursor-none shadow-md"
              style={{ background:`linear-gradient(135deg,${f.color},${f.color}CC)` }}>
              Přidat ✦
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlavorSection() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once:true });
  return (
    <section id="prichute" className="section dot-bg" style={{ background:"#FFFBF7" }}>
      <div className="wrap">
        {/* Header */}
        <div ref={hRef} className="text-center mb-16">
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={hInView?{opacity:1,scale:1}:{}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm mb-5"
            style={{ background:"#FFE5F0", color:"#FF6B9D" }}>
            🍦 Naše signature příchutě
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight"
              style={{ color:"#2D1B10" }} initial={{ y:"110%" }} animate={hInView?{y:0}:{}}
              transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}>
              Tři příchutě,<br />
              <span className="grad-pink">jeden úsměv</span> 😊
            </motion.h2>
          </div>
          <motion.p initial={{ opacity:0, y:20 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ delay:0.3 }}
            className="text-[16px] leading-relaxed max-w-xl mx-auto mt-4" style={{ color:"#6B4226", opacity:0.8 }}>
            Každý den čerstvě připravené ze surovin nejvyšší kvality. Nespokojíme se s průměrem.
          </motion.p>
        </div>

        {/* 3 featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {flavors.slice(0,3).map((f,i) => <FlavorCard key={f.id} f={f} index={i} />)}
        </div>

        {/* More flavors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {flavors.slice(3).map((f,i) => <FlavorCard key={f.id} f={f} index={i} />)}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="text-center">
          <p className="text-[15px] font-bold mb-4" style={{ color:"rgba(92,51,23,0.4)" }}>+ 30 dalších sezónních příchutí během roku</p>
          <motion.a href="#menu" whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
            className="inline-flex items-center gap-2 btn-shimmer text-white font-bold px-8 py-4 rounded-full shadow-fun text-[15px]"
            style={{ textDecoration:"none" }}>
            Zobrazit celé menu →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
