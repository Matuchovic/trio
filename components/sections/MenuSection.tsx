"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { menuItems } from "@/lib/data";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="menu" ref={ref} className="section relative overflow-hidden" style={{ background:"var(--choco)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:`radial-gradient(ellipse at 15% 50%,rgba(196,117,42,0.12) 0%,transparent 55%),radial-gradient(ellipse at 85% 20%,rgba(232,82,106,0.08) 0%,transparent 45%)`,
      }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="d" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#C4752A"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#d)"/>
      </svg>

      <div className="wrap relative">
        <div className="mb-16">
          <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} className="label mb-4" style={{ color:"var(--caramel)" }}>✦ Co nabízíme</motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-7xl font-light italic" style={{ color:"var(--vanilla)" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
              Naše menu
            </motion.h2>
          </div>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.3 }}
          className="flex gap-2 mb-12 p-1.5 rounded-2xl w-fit" style={{ background:"rgba(255,255,255,0.05)" }}>
          {menuItems.map((tab,i)=>(
            <button key={tab.cat} onClick={()=>setActive(i)}
              className="relative px-6 py-3 rounded-xl text-[13px] font-medium transition-all cursor-none flex items-center gap-2"
              style={{ color: active===i?"var(--choco)":"rgba(245,237,214,0.4)" }}>
              {active===i && <motion.div layoutId="mt" className="absolute inset-0 rounded-xl" style={{ background:"var(--caramel)" }} transition={{ type:"spring", bounce:0.2, duration:0.55 }} />}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10 hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div key={active} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.45 }} className="space-y-2.5">
          {menuItems[active].items.map((item,i)=>(
            <motion.div key={`${active}-${i}`} initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:i*0.07 }} whileHover={{ x:5 }}
              className="flex items-center justify-between rounded-2xl px-6 py-5 cursor-none group relative overflow-hidden"
              style={{ background:item.tag?"rgba(196,117,42,0.07)":"rgba(255,255,255,0.03)", border:item.tag?"1px solid rgba(196,117,42,0.18)":"1px solid rgba(255,255,255,0.05)" }}>
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background:"linear-gradient(90deg,rgba(196,117,42,0.07),transparent)" }} />
              <div className="flex items-center gap-4 relative">
                {item.tag && <span className="label px-3 py-1.5 rounded-full text-white flex-shrink-0" style={{ background:"var(--caramel)", fontSize:"9px" }}>{item.tag}</span>}
                <div>
                  <div className="font-medium text-[15px]" style={{ color:"var(--vanilla)" }}>{item.name}</div>
                  <div className="text-[13px] mt-0.5" style={{ color:"rgba(245,237,214,0.35)" }}>{item.desc}</div>
                </div>
              </div>
              <div className="font-display text-2xl italic whitespace-nowrap" style={{ color:"var(--caramel)" }}>{item.price} Kč</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.7 }} className="mt-12 text-center">
          <p className="text-[13px] mb-5" style={{ color:"rgba(245,237,214,0.25)" }}>Zmrzlinové dorty min. 72 hodin předem · Alergenní informace k dispozici u pokladny</p>
          <motion.a href="#kontakt" whileHover={{ borderColor:"rgba(196,117,42,0.5)", color:"var(--caramel)" }}
            className="inline-flex items-center gap-2 border rounded-full px-7 py-3 text-[13px] font-medium transition-all"
            style={{ border:"1px solid rgba(196,117,42,0.2)", color:"rgba(245,237,214,0.4)", textDecoration:"none" }}>
            Objednat dort na míru →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
