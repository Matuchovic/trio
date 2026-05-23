"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const scoops = [
  { emoji:"🍓", label:"Jahoda", color:"#FF6B9D", x:"-5%", y:"15%", delay:0, rot:-8, size:90 },
  { emoji:"🍫", label:"Čokoláda", color:"#7B3F1A", x:"80%", y:"8%", delay:0.1, rot:6, size:80 },
  { emoji:"🌿", label:"Vanilka", color:"#C4901A", x:"88%", y:"65%", delay:0.2, rot:-5, size:75 },
  { emoji:"🌰", label:"Pistácie", color:"#3A7D44", x:"-3%", y:"72%", delay:0.15, rot:8, size:70 },
  { emoji:"🥭", label:"Mango", color:"#E07B20", x:"40%", y:"5%", delay:0.25, rot:-3, size:65 },
  { emoji:"🍯", label:"Karamel", color:"#B8560A", x:"15%", y:"82%", delay:0.3, rot:5, size:72 },
];

const stats = [
  { num:"15+", label:"let tradice", emoji:"🏆" },
  { num:"4.9★", label:"hodnocení", emoji:"⭐" },
  { num:"30+", label:"příchutí", emoji:"🍦" },
  { num:"∞", label:"úsměvů", emoji:"😊" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["0%","18%"]);
  const opacity = useTransform(scrollYProgress, [0,0.7], [1,0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background:"linear-gradient(160deg, #FF6B9D 0%, #FF4757 30%, #FF9F43 70%, #FFD93D 100%)" }}>

      {/* Animated blobs bg */}
      {[{w:500,x:"60%",y:"20%",c:"rgba(255,255,255,0.08)"},{w:350,x:"5%",y:"50%",c:"rgba(255,255,255,0.06)"},{w:280,x:"70%",y:"65%",c:"rgba(255,255,255,0.07)"}].map((b,i)=>(
        <motion.div key={i} className="absolute rounded-full pointer-events-none blob"
          style={{ width:b.w, height:b.w, left:b.x, top:b.y, background:b.c, transform:"translate(-50%,-50%)" }}
          animate={{ scale:[1,1.12,1], rotate:[0,8,0] }} transition={{ duration:7+i*2, repeat:Infinity, ease:"easeInOut", delay:i }} />
      ))}

      {/* Stripe overlay */}
      <div className="absolute inset-0 stripe-bg pointer-events-none opacity-30" />

      {/* Floating flavor chips */}
      {scoops.map((s, i) => (
        <motion.div key={i}
          className="absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full font-bold text-white text-sm shadow-lg cursor-none"
          style={{ left:s.x, top:s.y, background:s.color, rotate:s.rot, fontSize:13, zIndex:5 }}
          initial={{ opacity:0, scale:0 }}
          animate={{ opacity:1, scale:1, y:[0,-10,0] }}
          transition={{ delay:s.delay+0.8, duration:0.5, y:{ duration:3+i*0.4, repeat:Infinity, ease:"easeInOut", delay:i*0.3 } }}>
          <span style={{ fontSize:s.size/4 }}>{s.emoji}</span>
          {s.label}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Badge */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-10 border border-white/30">
          <motion.span animate={{ scale:[1,1.4,1], opacity:[0.8,0.4,0.8] }} transition={{ duration:1.5, repeat:Infinity }}
            className="w-2 h-2 rounded-full bg-white" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">Mladá Boleslav · Otevřeno 10–20 hod</span>
        </motion.div>

        {/* Big title */}
        <div className="overflow-hidden mb-4">
          <motion.h1 className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] leading-none text-white font-semibold"
            initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1, delay:0.2, ease:[0.22,1,0.36,1] }}>
            TRIO
          </motion.h1>
        </div>

        {/* Giant ice cream */}
        <motion.div className="text-[100px] md:text-[140px] leading-none mb-6 select-none"
          initial={{ scale:0, rotate:-20 }} animate={{ scale:1, rotate:0 }}
          transition={{ type:"spring", stiffness:180, damping:14, delay:0.5 }}
          style={{ filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.2))" }}>
          <motion.span animate={{ y:[0,-12,0], rotate:[0,3,-3,0] }} transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut" }}>
            🍦
          </motion.span>
        </motion.div>

        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }}
          className="text-white/85 text-xl md:text-2xl font-bold mb-4 leading-snug">
          Belgická čokoláda · Madagaskarská vanilka · Čerstvá jahoda
        </motion.p>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.0 }}
          className="text-white/60 text-base md:text-lg font-semibold mb-12">
          Točená zmrzlina ze surovin nejvyšší kvality · Denně čerstvé
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <motion.a href="#prichute" whileHover={{ scale:1.08, boxShadow:"0 20px 50px rgba(0,0,0,0.25)" }} whileTap={{ scale:0.96 }}
            className="bg-white text-pink font-bold text-[15px] px-9 py-4 rounded-full shadow-fun-lg flex items-center gap-2"
            style={{ textDecoration:"none", color:"var(--coral)" }}>
            🍦 Prozkoumat příchutě
          </motion.a>
          <motion.a href="#menu" whileHover={{ scale:1.08, background:"rgba(255,255,255,0.25)" }} whileTap={{ scale:0.96 }}
            className="border-2 border-white/60 text-white font-bold text-[15px] px-9 py-4 rounded-full flex items-center gap-2 transition-all"
            style={{ textDecoration:"none", background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)" }}>
            📋 Zobrazit menu
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/20">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.5+i*0.1 }}
              whileHover={{ scale:1.05 }}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="font-display text-3xl font-semibold text-white">{s.num}</div>
              <div className="text-white/60 text-xs font-bold uppercase tracking-wider mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFBF7"/>
        </svg>
      </div>
    </section>
  );
}
