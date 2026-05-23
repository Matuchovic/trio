"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { flavors } from "@/lib/data";

function FlavorCard({ f, i }: { f: typeof flavors[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const iv = useInView(ref, { once:true, margin:"-80px" });
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x:0, y:0 });

  const onMM = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x:((e.clientX-r.left)/r.width-.5)*18, y:((e.clientY-r.top)/r.height-.5)*-18 });
  };

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:80 }} animate={iv?{opacity:1,y:0}:{}}
      transition={{ duration:1, delay:i*.15, ease:[0.22,1,0.36,1] }}
      style={{ perspective:1200 }}>
      <motion.div
        className="relative rounded-3xl overflow-hidden cursor-none"
        style={{
          transformStyle:"preserve-3d",
          transform: hov ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)` : "scale(1)",
          transition:"transform .5s cubic-bezier(.23,1,.32,1), box-shadow .5s",
          boxShadow: hov ? `0 40px 80px ${f.color}60, 0 0 0 1px ${f.accent}20` : "0 4px 32px rgba(0,0,0,0.4)",
        }}
        onMouseMove={onMM}
        onMouseEnter={()=>setHov(true)}
        onMouseLeave={()=>{ setHov(false); setTilt({x:0,y:0}); }}
      >
        {/* Top image area */}
        <div className="relative h-64 flex items-center justify-center overflow-hidden"
          style={{ background:f.gradient }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 256">
            {Array.from({length:10}).map((_,i)=>Array.from({length:6}).map((_,j)=>(
              <circle key={`${i}-${j}`} cx={i*45} cy={j*55} r="18" fill="white"/>
            )))}
          </svg>

          {/* Subtle glow on hover */}
          <motion.div className="absolute inset-0 pointer-events-none"
            animate={{ opacity: hov ? 1 : 0 }}
            style={{ background:"radial-gradient(circle at 50% 40%, rgba(255,255,255,0.1), transparent 65%)" }} />

          {/* Number */}
          <div className="absolute top-5 left-6 font-display text-[80px] italic font-black leading-none select-none"
            style={{ color:"rgba(255,255,255,0.07)", fontFamily:"var(--display)" }}>
            {f.num}
          </div>

          {/* EN name */}
          <div className="absolute bottom-4 right-5" style={{ fontFamily:"var(--mono)", fontSize:"9px", letterSpacing:".25em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>
            {f.sub}
          </div>

          {/* Tag */}
          <div className="absolute top-5 right-5 px-3 py-1 rounded-full glass text-cream t-label" style={{ fontSize:"9px", letterSpacing:".15em" }}>
            {f.tag}
          </div>

          {/* Decorative circle */}
          <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full" style={{ background:"rgba(255,255,255,0.06)", boxShadow:"inset 0 0 30px rgba(255,255,255,0.08)" }} />
          </div>
        </div>

        {/* Content — dark surface */}
        <div style={{ background:"#0F0700", borderTop:`1px solid ${f.accent}20` }} className="p-8">
          <div className="t-label mb-3" style={{ color:f.accent, letterSpacing:".2em" }}>{f.sub}</div>
          <h3 className="t-display text-2xl font-bold italic mb-4" style={{ color:"var(--cream)", fontFamily:"var(--display)" }}>
            {f.name}
          </h3>
          <p className="t-body text-sm leading-relaxed mb-6" style={{ color:"rgba(251,245,235,.55)" }}>{f.story}</p>

          {/* Notes */}
          <div className="flex flex-wrap gap-2 mb-5">
            {f.notes.map(n=>(
              <span key={n} className="text-[10px] px-3 py-1.5 rounded-full"
                style={{ background:`${f.accent}15`, color:f.accent, fontFamily:"var(--mono)", letterSpacing:".1em", textTransform:"uppercase" }}>
                {n}
              </span>
            ))}
          </div>

          <div className="text-[10px] mb-6" style={{ fontFamily:"var(--mono)", letterSpacing:".15em", color:"rgba(251,245,235,.3)", textTransform:"uppercase" }}>
            Párování: <span style={{ color:f.accent }}>{f.pairing}</span>
          </div>

          <div className="flex items-center justify-between pt-5"
            style={{ borderTop:"1px solid rgba(255,255,255,.06)" }}>
            <div>
              <span className="t-display text-4xl italic font-bold" style={{ color:f.accent, fontFamily:"var(--display)" }}>
                {f.price}
              </span>
              <span className="text-xs ml-1.5" style={{ color:"rgba(251,245,235,.3)", fontFamily:"var(--mono)" }}>Kč / kopeček</span>
            </div>
            <motion.button whileHover={{ scale:1.06 }} whileTap={{ scale:.95 }}
              className="btn-gold px-6 py-2.5 rounded-full cursor-none text-xs">
              Přidat
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlavorSection() {
  const hRef = useRef(null);
  const hIV = useInView(hRef, { once:true });
  return (
    <section id="prichute" className="section" style={{ background:"var(--ink)" }}>
      <div className="wrap">
        {/* Header — asymmetric */}
        <div ref={hRef} className="grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <motion.div initial={{ opacity:0, x:-16 }} animate={hIV?{opacity:1,x:0}:{}}
              className="t-label mb-6" style={{ color:"var(--caramel)", letterSpacing:".3em" }}>
              ✦ Signature příchutě
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="t-display font-black italic"
                style={{ fontSize:"clamp(44px,6vw,88px)", color:"var(--cream)", lineHeight:.95, fontFamily:"var(--display)" }}
                initial={{ y:"110%" }} animate={hIV?{y:0}:{}}
                transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                Tři dokonalé<br/>
                <span className="grad-text">příchutě léta</span>
              </motion.h2>
            </div>
          </div>
          <motion.div initial={{ opacity:0, y:20 }} animate={hIV?{opacity:1,y:0}:{}} transition={{ delay:.3 }}
            className="md:text-right">
            <p className="t-body text-[15px] leading-relaxed" style={{ color:"rgba(251,245,235,.5)" }}>
              Každá příchuť — výsledek měsíců pečlivého výběru surovin z nejlepších oblastí světa. Denně čerstvé, bez kompromisu.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((f,i)=><FlavorCard key={f.id} f={f} i={i} />)}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="text-center mt-20">
          <p className="t-label mb-6" style={{ letterSpacing:".25em", opacity:.3 }}>+ 30 sezónních příchutí v průběhu roku</p>
          <motion.a href="#menu" whileHover={{ scale:1.04 }}
            className="glass px-8 py-3 rounded-full t-label inline-block transition-all hover:border-caramel"
            style={{ textDecoration:"none", color:"rgba(251,245,235,.5)", letterSpacing:".2em" }}>
            Celé menu →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
