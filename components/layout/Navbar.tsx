"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

type NavLink = { label: string; href: string };
const links: NavLink[] = [
  { label: "Příchutě", href: "#prichute" },
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#galerie" },
  { label: "O nás", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
    setHidden(y > prev + 8 && y > 200);
    setPrev(y);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500"
        style={{
          height: scrolled ? 64 : 80,
          background: scrolled ? "rgba(255,252,248,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,117,42,0.12)" : "none",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex items-baseline gap-2">
            <span className="font-display italic font-light tracking-widest text-2xl transition-colors" style={{ color: scrolled ? "var(--choco)" : "white" }}>TRIO</span>
            <span className="label hidden sm:block opacity-40 transition-colors" style={{ color: scrolled ? "var(--choco)" : "white" }}>Mladá Boleslav</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.div key={l.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
              <a href={l.href} className="text-[13px] font-medium tracking-wide relative group transition-colors"
                style={{ color: scrolled ? "var(--choco-mid)" : "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-caramel" />
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a href="#kontakt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex shimmer text-white text-[13px] font-semibold px-5 py-2.5 rounded-full"
            style={{ textDecoration: "none" }}>
            Objednat dort ✦
          </motion.a>
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2 relative z-[60]" aria-label="Menu">
            {[0,1,2].map(i => (
              <motion.span key={i} className="block h-px w-6 rounded-full origin-center"
                style={{ background: open ? "white" : scrolled ? "var(--choco)" : "white" }}
                animate={open ? i===1?{opacity:0}:i===0?{rotate:45,y:6}:{rotate:-45,y:-6} : {rotate:0,y:0,opacity:1}}
                transition={{ duration: 0.3 }} />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath:"inset(0 0 100% 0)" }} animate={{ clipPath:"inset(0 0 0% 0)" }} exit={{ clipPath:"inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76,0,0.24,1] }}
            className="fixed inset-0 z-[55] grad-hero flex flex-col items-center justify-center md:hidden">
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-5xl italic font-light text-white mb-6 hover:text-caramel transition-colors"
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
