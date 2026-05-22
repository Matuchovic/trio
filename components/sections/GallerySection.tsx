"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const items = [
  { tag:"Signature", label:"TRIO Kornout", emoji:"🍦🍫🌿🍓", bg:"linear-gradient(135deg,#5C3015,#C4752A)", span:"md:col-span-2 md:row-span-2" },
  { tag:"Premium", label:"Pistáciový pohár", emoji:"🌰✨", bg:"linear-gradient(135deg,#2A5C20,#6DBD58)", span:"" },
  { tag:"Letní", label:"Ovocný pohár", emoji:"🍓🥭🫐", bg:"linear-gradient(135deg,#8B1A30,#E8526A)", span:"" },
  { tag:"Detail", label:"Belgická čokoláda", emoji:"🍫💫", bg:"linear-gradient(135deg,#3D1505,#8B4513)", span:"" },
  { tag:"Dorty", label:"Narozeninový dort", emoji:"🎂🍦", bg:"linear-gradient(135deg,#8B6914,#E8C040)", span:"md:col-span-2" },
  { tag:"Behind", label:"Ranní příprava", emoji:"⏰🍦", bg:"linear-gradient(135deg,#1A3A5C,#4A9FD4)", span:"" },
  { tag:"Prodejna", label:"Náměstí Míru", emoji:"🏪☀️", bg:"linear-gradient(135deg,#2A5C50,#4ABFA0)", span:"" },
  { tag:"Rodina", label:"Pro celou rodinu", emoji:"👨‍👩‍👧🍦", bg:"linear-gradient(135deg,#5C1A4A,#D47AB0)", span:"" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [sel, setSel] = useState<number|null>(null);

  return (
    <section id="galerie" ref={ref} className="section" style={{ background:"var(--sand)" }}>
      <div className="wrap">
        <div className="mb-16">
          <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} className="label mb-4" style={{ color:"var(--caramel)" }}>✦ Galerie</motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-7xl font-light" style={{ color:"var(--choco)" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
              Každý záběr<br /><em style={{ color:"var(--caramel)" }}>říká příběh</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {items.map((item,i)=>(
            <motion.div key={i} initial={{ opacity:0, scale:0.92 }} animate={inView?{opacity:1,scale:1}:{}}
              transition={{ delay:i*0.07, duration:0.7, ease:[0.22,1,0.36,1] }}
              whileHover={{ scale:1.02, zIndex:10 }} onClick={()=>setSel(i)}
              className={`relative rounded-2xl overflow-hidden cursor-none group ${item.span}`}
              style={{ background:item.bg }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl md:text-5xl mb-3 select-none" style={{ filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>{item.emoji}</div>
              </div>
              <motion.div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:"linear-gradient(to top,rgba(0,0,0,0.7),transparent 60%)" }}>
                <span className="label text-white/60 mb-1">{item.tag}</span>
                <span className="text-white font-semibold text-[15px]">{item.label}</span>
              </motion.div>
              <div className="absolute top-3 left-3">
                <span className="label bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full" style={{ fontSize:"9px" }}>{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel!==null && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-16"
            style={{ background:"rgba(0,0,0,0.92)", backdropFilter:"blur(20px)" }} onClick={()=>setSel(null)}>
            <motion.div initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }}
              transition={{ duration:0.4, ease:[0.22,1,0.36,1] }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden aspect-video flex items-center justify-center"
              style={{ background:items[sel].bg }} onClick={e=>e.stopPropagation()}>
              <div className="text-[100px]" style={{ filter:"drop-shadow(0 8px 32px rgba(0,0,0,0.4))" }}>{items[sel].emoji}</div>
              <div className="absolute bottom-8 left-8">
                <div className="label text-white/50 mb-1">{items[sel].tag}</div>
                <div className="font-display text-3xl italic text-white">{items[sel].label}</div>
              </div>
            </motion.div>
            <button onClick={()=>setSel(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white cursor-none">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
