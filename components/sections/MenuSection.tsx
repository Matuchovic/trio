"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { menuCategories } from "@/lib/data";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const iv = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="menu" ref={ref} className="section relative overflow-hidden"
      style={{ background:"#0F0700" }}>
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:`radial-gradient(ellipse at 10% 50%, rgba(196,117,42,.08) 0%, transparent 55%),
                         radial-gradient(ellipse at 90% 20%, rgba(212,64,106,.05) 0%, transparent 45%)` }} />

      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div initial={{ opacity:0 }} animate={iv?{opacity:1}:{}}
              className="t-label mb-6" style={{ color:"var(--caramel)", letterSpacing:".3em" }}>
              ✦ Co nabízíme
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="t-display font-black italic" style={{ fontSize:"clamp(44px,6vw,88px)", color:"var(--cream)", fontFamily:"var(--display)", lineHeight:.95 }}
                initial={{ y:"110%" }} animate={iv?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                Naše<br/><span className="grad-text">menu</span>
              </motion.h2>
            </div>
          </div>
          {/* Tab switcher */}
          <motion.div initial={{ opacity:0, y:16 }} animate={iv?{opacity:1,y:0}:{}} transition={{ delay:.3 }}
            className="flex flex-wrap gap-2 md:justify-end">
            {menuCategories.map((cat,i)=>(
              <button key={cat.id} onClick={()=>setActive(i)}
                className="relative px-6 py-2.5 rounded-full cursor-none transition-all text-[10px] font-bold tracking-[.18em] uppercase"
                style={{
                  background: active===i ? "var(--caramel)" : "rgba(251,245,235,.04)",
                  color: active===i ? "var(--ink)" : "rgba(251,245,235,.4)",
                  border: active===i ? "none" : "1px solid rgba(212,175,55,.15)",
                  transform: active===i ? "scale(1.04)" : "scale(1)",
                }}>
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div key={active} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:.45 }} className="space-y-2">
          {menuCategories[active].items.map((item,i)=>(
            <motion.div key={`${active}-${i}`} initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:i*.06 }} whileHover={{ x:5 }}
              className="flex items-center justify-between rounded-2xl px-7 py-5 cursor-none group relative overflow-hidden"
              style={{
                background: item.featured ? "rgba(196,117,42,.07)" : "rgba(251,245,235,.025)",
                border: item.featured ? "1px solid rgba(196,117,42,.2)" : "1px solid rgba(255,255,255,.04)",
              }}>
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ background:"linear-gradient(90deg,rgba(196,117,42,.06),transparent)" }} />

              <div className="flex items-center gap-4 relative">
                {item.featured && (
                  <span className="t-label px-3 py-1.5 rounded-full text-ink flex-shrink-0"
                    style={{ background:"var(--caramel)", fontSize:"8px", letterSpacing:".12em" }}>
                    ✦ Featured
                  </span>
                )}
                <div>
                  <div className="font-semibold text-[15px]" style={{ color:"var(--cream)" }}>{item.name}</div>
                  <div className="text-[12px] mt-0.5" style={{ color:"rgba(251,245,235,.35)", fontFamily:"var(--body)" }}>{item.desc}</div>
                </div>
              </div>

              <div className="t-display text-2xl italic font-bold relative ml-4 whitespace-nowrap"
                style={{ color:"var(--caramel)", fontFamily:"var(--display)" }}>
                {item.price}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={iv?{opacity:1}:{}} transition={{ delay:.6 }}
          className="mt-12 text-center">
          <p className="t-label mb-5" style={{ letterSpacing:".2em", opacity:.3 }}>
            Zmrzlinové dorty min. 72 hodin předem · Alergeny k dispozici u pokladny
          </p>
          <motion.a href="#kontakt" whileHover={{ borderColor:"rgba(212,175,55,.4)", color:"var(--gold)" }}
            className="glass px-8 py-3 rounded-full t-label inline-block transition-all"
            style={{ textDecoration:"none", color:"rgba(251,245,235,.4)", letterSpacing:".2em" }}>
            Objednat dort na míru →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
