"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

type NavLink = { label: string; href: string };
const links: NavLink[] = [
  { label:"Příchutě", href:"#prichute" },
  { label:"Menu", href:"#menu" },
  { label:"Galerie", href:"#galerie" },
  { label:"O nás", href:"#o-nas" },
  { label:"Kontakt", href:"#kontakt" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
    setHidden(y > prev + 8 && y > 200);
    setPrev(y);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-400"
        style={{
          height: scrolled ? 64 : 76,
          background: scrolled ? "rgba(255,251,247,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1.5px solid rgba(255,107,157,0.15)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration:"none" }}>
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6 }}
            className="flex items-center gap-2">
            <span className="text-2xl">🍦</span>
            <span className="font-display text-2xl font-semibold tracking-wide"
              style={{ color: scrolled ? "#5C3317" : "white" }}>TRIO</span>
            <span className="hidden sm:block text-xs font-bold uppercase tracking-widest opacity-50 ml-1"
              style={{ color: scrolled ? "#5C3317" : "white" }}>Mladá Boleslav</span>
          </motion.div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href}
              initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1+i*0.07 }}
              className="text-[14px] font-bold relative group transition-colors"
              style={{ color: scrolled ? "#5C3317" : "rgba(255,255,255,0.85)", textDecoration:"none" }}>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full bg-pink" />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a href="#kontakt" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
          whileHover={{ scale:1.06 }} whileTap={{ scale:0.95 }}
          className="hidden md:inline-flex items-center gap-2 btn-shimmer text-white text-[13px] font-bold px-5 py-2.5 rounded-full shadow-fun"
          style={{ textDecoration:"none" }}>
          🎂 Objednat dort
        </motion.a>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 relative z-[60]" aria-label="Menu">
          <div className="w-6 flex flex-col gap-[5px]">
            {[0,1,2].map(i => (
              <motion.span key={i} className="block h-0.5 rounded-full origin-center"
                style={{ background: open ? "white" : scrolled ? "#5C3317" : "white" }}
                animate={open ? i===1?{opacity:0}:i===0?{rotate:45,y:6}:{rotate:-45,y:-6} : {rotate:0,y:0,opacity:1}}
                transition={{ duration:0.3 }} />
            ))}
          </div>
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath:"inset(0 0 100% 0)" }} animate={{ clipPath:"inset(0 0 0% 0)" }} exit={{ clipPath:"inset(0 0 100% 0)" }}
            transition={{ duration:0.6, ease:[0.76,0,0.24,1] }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center"
            style={{ background:"linear-gradient(135deg,#FF6B9D,#FF4757,#FF9F43)" }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                transition={{ delay:0.08+i*0.08 }}
                className="font-display text-5xl font-semibold text-white mb-5 hover:scale-105 transition-transform"
                style={{ textDecoration:"none" }}>
                {l.label}
              </motion.a>
            ))}
            <div className="flex gap-4 mt-8 text-4xl">
              {["🍦","🍓","🍫","🌿"].map((e,i) => (
                <motion.span key={i} animate={{ rotate:[0,10,-10,0] }} transition={{ duration:2, repeat:Infinity, delay:i*0.3 }}>{e}</motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
