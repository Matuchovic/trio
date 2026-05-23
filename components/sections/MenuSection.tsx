"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { menuItems } from "@/lib/data";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section id="menu" ref={ref} className="section" style={{ background:"#FFF5E6" }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm mb-5"
            style={{ background:"#FFE0B2", color:"#B8560A" }}>
            📋 Co nabízíme
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color:"#2D1B10" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}>
              Naše <span className="grad-yellow">menu</span> 🍽️
            </motion.h2>
          </div>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.2 }}
          className="flex gap-2 mb-10 justify-center flex-wrap">
          {menuItems.map((tab, i) => (
            <button key={tab.cat} onClick={() => setActive(i)}
              className="relative px-6 py-3 rounded-2xl text-[14px] font-bold cursor-none transition-all flex items-center gap-2"
              style={{
                background: active===i ? tab.color : "white",
                color: active===i ? "white" : "#5C3317",
                boxShadow: active===i ? `0 8px 24px ${tab.color}50` : "0 2px 8px rgba(0,0,0,0.06)",
                transform: active===i ? "scale(1.05)" : "scale(1)",
                border: `2px solid ${active===i ? tab.color : "transparent"}`,
              }}>
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Items */}
        <motion.div key={active} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}
          className="space-y-3 max-w-2xl mx-auto">
          {menuItems[active].items.map((item, i) => (
            <motion.div key={`${active}-${i}`} initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:i*0.07 }}
              whileHover={{ x:6, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }}
              className="flex items-center justify-between bg-white rounded-2xl px-6 py-5 cursor-none relative overflow-hidden"
              style={{ border:`2px solid ${item.hot ? menuItems[active].color+"40" : "transparent"}`,
                boxShadow: item.hot ? `0 4px 20px ${menuItems[active].color}25` : "0 2px 12px rgba(0,0,0,0.05)" }}>
              {item.hot && (
                <div className="absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl"
                  style={{ background:menuItems[active].color }}>
                  🔥 HOT
                </div>
              )}
              <div>
                <div className="font-bold text-[15px]" style={{ color:"#2D1B10" }}>{item.name}</div>
                <div className="text-[13px] mt-0.5" style={{ color:"#6B4226", opacity:0.7 }}>{item.desc}</div>
              </div>
              <div className="font-display text-2xl font-bold ml-4 whitespace-nowrap" style={{ color:menuItems[active].color }}>
                {item.price} Kč
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.6 }} className="text-center mt-10">
          <p className="text-[13px] font-semibold mb-5" style={{ color:"rgba(92,51,23,0.4)" }}>
            🎂 Zmrzlinové dorty min. 72h předem · Alergeny k dispozici u pokladny
          </p>
          <motion.a href="#kontakt" whileHover={{ scale:1.05 }} className="inline-flex items-center gap-2 font-bold text-[14px] px-7 py-3 rounded-full border-2 border-dashed transition-all"
            style={{ borderColor:"#FF6B9D", color:"#FF6B9D", textDecoration:"none" }}>
            🎂 Objednat dort na míru →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
