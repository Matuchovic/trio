"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const iv = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="o-nas" ref={ref} className="section" style={{ background:"#0F0700" }}>
      <div className="wrap">
        {/* Asymmetric header */}
        <div className="grid md:grid-cols-12 gap-10 items-start mb-24">
          <div className="md:col-span-5">
            <motion.div initial={{ opacity:0 }} animate={iv?{opacity:1}:{}}
              className="t-label mb-6" style={{ color:"var(--caramel)", letterSpacing:".3em" }}>
              ✦ Náš příběh
            </motion.div>
            <div className="overflow-hidden mb-8">
              <motion.h2 className="t-display font-black italic"
                style={{ fontSize:"clamp(44px,5.5vw,80px)", color:"var(--cream)", fontFamily:"var(--display)", lineHeight:.95 }}
                initial={{ y:"110%" }} animate={iv?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                15 let<br/>čisté<br/><span className="grad-text">vášně</span>
              </motion.h2>
            </div>
            <motion.p initial={{ opacity:0, y:20 }} animate={iv?{opacity:1,y:0}:{}} transition={{ delay:.3 }}
              className="t-body text-[15px] leading-relaxed" style={{ color:"rgba(251,245,235,.5)" }}>
              Začínali jsme s jedním stánkem, třemi příchutěmi a jedním pravidlem: žádné kompromisy. Dnes jsme stejní — jen o 15 let zkušeností bohatší.
            </motion.p>
          </div>

          <div className="md:col-span-7 md:pl-10">
            {/* Big year */}
            <motion.div initial={{ opacity:0, scale:.85 }} animate={iv?{opacity:1,scale:1}:{}} transition={{ delay:.2, duration:.8 }}
              className="relative">
              <div className="t-display font-black italic text-right leading-none select-none"
                style={{ fontSize:"clamp(80px,16vw,200px)", color:"rgba(196,117,42,0.06)", fontFamily:"var(--display)" }}>
                2009
              </div>
              <motion.div className="absolute inset-0 flex items-center justify-end pr-8"
                animate={{ rotate:[0,1,-1,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}>
                <div className="text-center">
                  <div className="text-6xl mb-2 float">🍦</div>
                  <div className="t-label" style={{ color:"var(--caramel)", letterSpacing:".2em" }}>est. 2009</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          <div className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background:"linear-gradient(to bottom, transparent, rgba(212,175,55,.25) 10%, rgba(212,175,55,.25) 90%, transparent)" }} />

          {timeline.map((item,i)=>{
            const itemRef = useRef(null);
            const itemIV = useInView(itemRef, { once:true, margin:"-60px" });
            return (
              <motion.div key={item.year} ref={itemRef}
                initial={{ opacity:0, x:-40 }} animate={itemIV?{opacity:1,x:0}:{}}
                transition={{ duration:.8, ease:[0.22,1,0.36,1] }}
                className="pl-12 pb-14 last:pb-0 relative">
                {/* Dot */}
                <motion.div animate={itemIV?{scale:[.5,1.3,1]}:{}} transition={{ duration:.6, delay:.2 }}
                  className="absolute left-0 top-1 w-3 h-3 -translate-x-1/2 rounded-full border-2 z-10"
                  style={{ borderColor:"var(--caramel)", background:"var(--ink)" }} />
                <motion.div className="absolute left-0 top-1 w-3 h-3 -translate-x-1/2 rounded-full"
                  style={{ background:"rgba(196,117,42,.3)" }}
                  animate={itemIV?{scale:[1,2.5],opacity:[.6,0]}:{}}
                  transition={{ duration:1.5, repeat:Infinity, delay:i*.4 }} />

                <div className="t-label mb-2" style={{ color:"var(--caramel)", letterSpacing:".2em" }}>{item.year}</div>
                <h3 className="t-display text-xl font-bold italic mb-2" style={{ color:"var(--cream)", fontFamily:"var(--display)" }}>{item.title}</h3>
                <p className="t-body text-[14px] leading-relaxed" style={{ color:"rgba(251,245,235,.45)" }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 pt-16"
          style={{ borderTop:"1px solid rgba(212,175,55,.1)" }}>
          {[
            { icon:"🌱", t:"Lokální suroviny", d:"Jahody od sousedů. Mléko od sousedů." },
            { icon:"🚫", t:"Bez éček", d:"Žádná umělá barviva ani konzervanty." },
            { icon:"⏰", t:"Denně čerstvé", d:"Vyrábíme každé ráno, nikdy den starší." },
            { icon:"🏆", t:"Grand Cru", d:"Suroviny z prestižních světových oblastí." },
          ].map((v,i)=>(
            <motion.div key={v.t} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:i*.1 }} whileHover={{ y:-5 }}
              className="glass rounded-2xl p-6 cursor-none">
              <div className="text-2xl mb-4">{v.icon}</div>
              <div className="font-semibold text-[14px] mb-2" style={{ color:"var(--cream)", fontFamily:"var(--body)" }}>{v.t}</div>
              <div className="text-[12px] leading-relaxed" style={{ color:"rgba(251,245,235,.4)" }}>{v.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
