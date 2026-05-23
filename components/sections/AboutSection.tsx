"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline, testimonials } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="o-nas" ref={ref} className="section dot-bg-yellow" style={{ background:"#FFFDE7" }}>
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm mb-5"
            style={{ background:"#FFF3B0", color:"#B8560A" }}>
            ❤️ Náš příběh
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color:"#2D1B10" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}>
              15 let <span className="grad-yellow">sladké vášně</span> 🍦
            </motion.h2>
          </div>
          <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.3 }}
            className="text-[16px] mt-4 max-w-xl mx-auto font-semibold" style={{ color:"#6B4226", opacity:0.8 }}>
            Začínali jsme s jedním stánkem a třemi příchutěmi. Dnes máme stovky tisíc spokojených zákazníků — ale stále stejnou lásku k zmrzlině.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-20">
          {timeline.map((item, i) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once:true, margin:"-40px" });
            const isLeft = i%2 === 0;
            const colors = ["#FF6B9D","#FFD93D","#6BCB77","#4ECDC4","#C77DFF"];
            const c = colors[i % colors.length];
            return (
              <motion.div key={item.year} ref={itemRef}
                initial={{ opacity:0, x: isLeft ? -50 : 50 }}
                animate={itemInView ? { opacity:1, x:0 } : {}}
                transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
                className={`flex items-center gap-6 mb-10 last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`flex-1 bg-white rounded-3xl p-6 shadow-sm ${isLeft ? "text-right" : "text-left"}`}
                  style={{ border:`2px solid ${c}30` }}>
                  <div className="text-xl font-bold mb-1" style={{ color:c }}>{item.year}</div>
                  <h3 className="font-display text-xl font-semibold mb-1" style={{ color:"#2D1B10" }}>{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color:"#6B4226", opacity:0.8 }}>{item.desc}</p>
                </div>
                <div className="relative flex-shrink-0">
                  <motion.div animate={itemInView ? { scale:[0.5,1.3,1] } : {}} transition={{ duration:0.6, delay:0.2 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10"
                    style={{ background:c, boxShadow:`0 8px 24px ${c}50` }}>
                    🍦
                  </motion.div>
                  <motion.div className="absolute inset-0 rounded-full" style={{ background:c }}
                    animate={itemInView ? { scale:[1,2.5], opacity:[0.5,0] } : {}}
                    transition={{ duration:1.5, repeat:Infinity, delay:i*0.4 }} />
                </div>
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-4 text-center">
          <h3 className="font-display text-3xl font-semibold mb-10" style={{ color:"#2D1B10" }}>Co říkají zákazníci 💬</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const tRef = useRef(null);
            const tInView = useInView(tRef, { once:true });
            const colors = ["#FF6B9D","#FFD93D","#6BCB77","#4ECDC4","#C77DFF"];
            return (
              <motion.div key={t.name} ref={tRef}
                initial={{ opacity:0, y:30, rotate: i%2===0 ? -1 : 1 }}
                animate={tInView ? { opacity:1, y:0, rotate:0 } : {}}
                transition={{ delay:i*0.1, duration:0.7 }}
                whileHover={{ y:-6, rotate: i%2===0 ? 1 : -1 }}
                className="bg-white rounded-3xl p-6 cursor-none"
                style={{ boxShadow:"0 4px 20px rgba(0,0,0,0.07)", border:`2px solid ${colors[i%5]}20` }}>
                <div className="text-3xl mb-3">{t.emoji}</div>
                <div className="text-yellow text-base font-bold mb-2">{"★".repeat(t.stars)}</div>
                <p className="text-[14px] leading-relaxed mb-4 font-semibold" style={{ color:"#2D1B10" }}>"{t.text}"</p>
                <div className="text-[12px] font-bold uppercase tracking-wider" style={{ color:colors[i%5] }}>{t.name}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[{e:"🌱",t:"Lokální suroviny",d:"Jahody od sousedů"},{e:"🚫",t:"Bez éček",d:"Žádná chemie"},{e:"⏰",t:"Denně čerstvé",d:"Ráno připraveno"},{e:"❤️",t:"S láskou",d:"Každý kopeček"}].map((v,i)=>{
            const cs=["#FF6B9D","#FFD93D","#6BCB77","#4ECDC4"];
            return (
              <motion.div key={v.t} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
                transition={{ delay:i*0.1 }} whileHover={{ y:-6, rotate: i%2===0 ? 1 : -1 }}
                className="bg-white rounded-3xl p-6 text-center cursor-none"
                style={{ boxShadow:`0 4px 20px ${cs[i]}25`, border:`2px solid ${cs[i]}30` }}>
                <div className="text-4xl mb-3">{v.e}</div>
                <div className="font-bold text-[14px] mb-1" style={{ color:"#2D1B10" }}>{v.t}</div>
                <div className="text-[12px]" style={{ color:cs[i] }}>{v.d}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
