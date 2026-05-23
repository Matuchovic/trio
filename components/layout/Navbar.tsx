"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

type L = { label:string; href:string };
const links:L[] = [
  { label:"Příchutě", href:"#prichute" },
  { label:"Menu", href:"#menu" },
  { label:"Galerie", href:"#galerie" },
  { label:"O nás", href:"#o-nas" },
  { label:"Kontakt", href:"#kontakt" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [sc, setSc] = useState(false);
  const [hid, setHid] = useState(false);
  const [prev, setPrev] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", y => {
    setSc(y > 60); setHid(y > prev + 8 && y > 200); setPrev(y);
  });

  return (
    <>
      <motion.header
        animate={{ y: hid && !open ? -100 : 0 }}
        transition={{ duration:.5, ease:[0.23,1,0.32,1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500"
        style={{
          height: sc ? 60 : 76,
          background: sc ? "rgba(10,5,0,0.9)" : "transparent",
          backdropFilter: sc ? "blur(24px)" : "none",
          borderBottom: sc ? "1px solid rgba(212,175,55,0.12)" : "none",
        }}
      >
        <a href="/" style={{ textDecoration:"none" }}>
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:.8 }}
            className="flex items-baseline gap-3">
            <span className="t-display text-xl font-bold italic" style={{ color:"var(--cream)" }}>TRIO</span>
            <span className="t-label hidden sm:block" style={{ letterSpacing:".2em", opacity:.4 }}>Mladá Boleslav</span>
          </motion.div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l,i)=>(
            <motion.a key={l.label} href={l.href}
              initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.1+i*.06 }}
              className="t-label text-cream/60 hover:text-cream transition-colors relative group"
              style={{ letterSpacing:".2em", textDecoration:"none" }}>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                style={{ background:"var(--caramel)" }} />
            </motion.a>
          ))}
        </nav>

        <motion.a href="#kontakt" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.55 }}
          whileHover={{ scale:1.04 }} whileTap={{ scale:.96 }}
          className="hidden md:inline-flex btn-gold items-center gap-2 px-6 py-2.5 rounded-full"
          style={{ textDecoration:"none" }}>
          Objednat dort
        </motion.a>

        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 relative z-[60]" aria-label="Menu">
          {[0,1,2].map(i=>(
            <motion.span key={i} className="block h-px w-6 mb-[5px] last:mb-0 origin-center"
              style={{ background:open?"var(--caramel)":"var(--cream)" }}
              animate={open ? i===1?{opacity:0}:i===0?{rotate:45,y:6}:{rotate:-45,y:-6} : {rotate:0,y:0,opacity:1}}
              transition={{ duration:.3 }} />
          ))}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath:"inset(0 0 100% 0)" }} animate={{ clipPath:"inset(0 0 0% 0)" }}
            exit={{ clipPath:"inset(0 0 100% 0)" }} transition={{ duration:.7, ease:[0.76,0,0.24,1] }}
            className="fixed inset-0 z-[55] grad-dark flex flex-col items-center justify-center md:hidden">
            {links.map((l,i)=>(
              <motion.a key={l.label} href={l.href} onClick={()=>setOpen(false)}
                initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                transition={{ delay:.08+i*.09 }}
                className="t-display text-5xl italic font-bold text-cream mb-6 hover:grad-text transition-all block"
                style={{ textDecoration:"none" }}>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
