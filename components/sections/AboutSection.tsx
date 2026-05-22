"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="o-nas" ref={ref} className="section" style={{ background:"var(--cream)" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} className="label mb-4" style={{ color:"var(--caramel)" }}>✦ Náš příběh</motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h2 className="font-display text-5xl md:text-6xl font-light leading-tight" style={{ color:"var(--choco)" }}
                initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                15 let čisté<br /><em className="grad-text">vášně</em>
              </motion.h2>
            </div>
            <motion.p initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.3 }}
              className="text-[15px] leading-relaxed max-w-sm" style={{ color:"var(--choco-mid)", opacity:0.8 }}>
              Začínali jsme s jedním stánkem a třemi příchutěmi. Dnes jsme stejní — jen o 15 let zkušeností bohatší. Zmrzlina je naše filozofie.
            </motion.p>
          </div>
          <motion.div initial={{ opacity:0, scale:0.85 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ delay:0.2, duration:0.8 }}
            className="relative flex items-center justify-center">
            <div className="font-display text-[18vw] md:text-[10vw] italic font-light leading-none" style={{ color:"rgba(196,117,42,0.07)" }}>2009</div>
            <motion.div className="absolute text-center" animate={{ rotate:[0,2,-2,0] }} transition={{ duration:6, repeat:Infinity }}>
              <div className="text-7xl mb-2 float">🍦</div>
              <div className="label" style={{ color:"var(--caramel)" }}>est. 2009</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px"
            style={{ background:"linear-gradient(to bottom,transparent,rgba(196,117,42,0.3) 10%,rgba(196,117,42,0.3) 90%,transparent)" }} />
          {timeline.map((item,i) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once:true, margin:"-60px" });
            const isEven = i%2===0;
            return (
              <motion.div key={item.year} ref={itemRef} initial={{ opacity:0, x:isEven?-60:60 }}
                animate={itemInView?{opacity:1,x:0}:{}} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
                className={`flex items-center gap-8 mb-14 last:mb-0 ${isEven?"flex-row":"flex-row-reverse"}`}>
                <div className={`flex-1 ${isEven?"text-right":"text-left"}`}>
                  <div className="label mb-2" style={{ color:"var(--caramel)" }}>{item.year}</div>
                  <h3 className="font-display text-2xl font-semibold mb-1.5" style={{ color:"var(--choco)" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color:"var(--choco-mid)", opacity:0.7 }}>{item.desc}</p>
                </div>
                <div className="relative flex-shrink-0">
                  <motion.div animate={itemInView?{scale:[0.5,1.2,1]}:{scale:0.5}} transition={{ duration:0.6, delay:0.2 }}
                    className="w-5 h-5 rounded-full border-2 relative z-10"
                    style={{ borderColor:"var(--caramel)", background:"var(--cream)" }} />
                  <motion.div animate={itemInView?{scale:[1,2,1],opacity:[0.8,0,0]}:{}} transition={{ duration:1.5, repeat:Infinity, delay:i*0.4 }}
                    className="absolute inset-0 rounded-full" style={{ background:"rgba(196,117,42,0.25)" }} />
                </div>
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{icon:"🌱",t:"Lokální suroviny",d:"Jahody, ovoce a mléko od lokálních farmářů"},{icon:"🚫",t:"Bez éček",d:"Žádná umělá barviva ani konzervanty"},{icon:"⏰",t:"Denně čerstvé",d:"Vyrábíme každé ráno, nikdy den starší"},{icon:"❤️",t:"S láskou",d:"Každý kopeček je připraven s péčí a úctou"}].map((v,i)=>(
            <motion.div key={v.t} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
              whileHover={{ y:-5 }} className="glass rounded-2xl p-6 cursor-none">
              <div className="text-3xl mb-3">{v.icon}</div>
              <div className="font-semibold mb-1.5" style={{ color:"var(--choco)" }}>{v.t}</div>
              <div className="text-[13px] leading-relaxed" style={{ color:"var(--choco-mid)", opacity:0.6 }}>{v.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
