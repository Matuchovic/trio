"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { flavors } from "@/lib/data";

function FlavorCard({ f, index }: { f: typeof flavors[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const [tilt, setTilt] = useState({ x:0, y:0 });
  const [hov, setHov] = useState(false);

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:80 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:1, delay:index*0.15, ease:[0.22,1,0.36,1] }} style={{ perspective:1000 }}>
      <motion.div className="relative rounded-3xl overflow-hidden cursor-none h-full"
        style={{
          transformStyle:"preserve-3d",
          transform: hov ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)` : "rotateX(0) rotateY(0) scale(1)",
          transition:"transform 0.5s cubic-bezier(.23,1,.32,1), box-shadow 0.5s",
          boxShadow: hov ? `0 40px 80px ${f.color}55, 0 0 0 1px ${f.color}25` : "0 4px 24px rgba(0,0,0,0.07)",
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({ x:((e.clientX-r.left)/r.width-0.5)*20, y:((e.clientY-r.top)/r.height-0.5)*-20 });
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); setTilt({x:0,y:0}); }}>
        {/* Top visual */}
        <div className="relative h-52 flex items-center justify-center overflow-hidden" style={{ background:f.gradient }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 210">
            {Array.from({length:10}).map((_,i)=>Array.from({length:5}).map((_,j)=>(
              <circle key={`${i}-${j}`} cx={i*45} cy={j*55} r="18" fill="white" />
            )))}
          </svg>
          <motion.div className="text-[80px] relative z-10 select-none float"
            style={{ animationDelay:`${index*0.4}s`, filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.3))" }}
            animate={hov?{rotate:[-4,4,-2,0],scale:[1,1.1,1]}:{rotate:0,scale:1}} transition={{ duration:0.6 }}>
            {f.emoji}
          </motion.div>
          <div className="absolute top-4 left-5 font-display text-6xl italic font-light text-white/15">{f.num}</div>
          <div className="absolute bottom-4 right-5 label text-white/40">{f.en}</div>
          <motion.div className="absolute inset-0" animate={{ opacity:hov?0.12:0 }}
            style={{ background:"radial-gradient(circle at center, white, transparent 70%)" }} />
        </div>
        {/* Content */}
        <div className="bg-white p-7 flex flex-col">
          <div className="label mb-2" style={{ color:f.color }}>{f.en}</div>
          <h3 className="font-display text-2xl font-bold mb-3" style={{ color:"var(--choco)" }}>{f.name}</h3>
          <p className="text-[14px] leading-relaxed mb-5 flex-1" style={{ color:"var(--choco-mid)", opacity:0.8 }}>{f.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {f.notes.map(n=>(
              <span key={n} className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                style={{ background:f.light, color:f.color }}>{n}</span>
            ))}
          </div>
          <div className="text-[11px] uppercase tracking-wider mb-5" style={{ color:"rgba(0,0,0,0.3)" }}>
            Párování: <span style={{ color:f.color }}>{f.pairing}</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
            <div className="flex gap-1.5">
              {f.tags.map(t=>(
                <span key={t} className="text-[10px] px-2 py-1 rounded-full border font-medium"
                  style={{ borderColor:`${f.color}40`, color:f.color }}>{t}</span>
              ))}
            </div>
            <div>
              <span className="font-display text-3xl italic font-semibold" style={{ color:f.color }}>{f.price}</span>
              <span className="text-[11px] ml-1" style={{ color:"rgba(0,0,0,0.3)" }}>Kč</span>
            </div>
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
    <section id="prichute" className="section" style={{ background:"var(--cream)" }}>
      <div className="wrap">
        <div ref={hRef} className="grid md:grid-cols-2 gap-8 items-end mb-20">
          <div>
            <motion.div initial={{ opacity:0, x:-16 }} animate={hInView?{opacity:1,x:0}:{}} className="label mb-4" style={{ color:"var(--caramel)" }}>
              ✦ Signature příchutě
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="font-display text-5xl md:text-7xl font-light leading-[1.0]" style={{ color:"var(--choco)" }}
                initial={{ y:"110%" }} animate={hInView?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                Tři dokonalé<br /><em className="grad-text">příchutě léta</em>
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity:0, y:20 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ delay:0.3 }}
            className="text-[15px] leading-relaxed md:text-right" style={{ color:"var(--choco-mid)", opacity:0.7 }}>
            Každá příchuť je výsledkem měsíců výběru surovin. Nespokojíme se s průměrem — jen to nejlepší z každého koutu světa, denně čerstvé.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((f,i)=><FlavorCard key={f.id} f={f} index={i} />)}
        </div>
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="text-center mt-16">
          <p className="font-display text-2xl italic font-light mb-6" style={{ color:"rgba(0,0,0,0.2)" }}>+ 30 sezónních příchutí v průběhu roku</p>
          <motion.a href="#menu" whileHover={{ scale:1.04, borderColor:"var(--caramel)", color:"var(--caramel)" }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border text-[13px] font-medium transition-all"
            style={{ border:"1px solid rgba(196,117,42,0.2)", color:"rgba(61,31,13,0.4)", textDecoration:"none" }}>
            Celé menu ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
