"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const items = [
  { tag:"✨ Signature", label:"TRIO Kornout", emoji:"🍦🍫🌿🍓", bg:"linear-gradient(135deg,#FF6B9D,#FF4757)", span:"md:col-span-2 md:row-span-2", big:true },
  { tag:"🌟 Premium", label:"Pistáciový pohár", emoji:"🌰✨", bg:"linear-gradient(135deg,#3A7D44,#6BCB77)", span:"", big:false },
  { tag:"☀️ Letní", label:"Ovocný pohár", emoji:"🍓🥭🫐", bg:"linear-gradient(135deg,#FF4757,#FF9F43)", span:"", big:false },
  { tag:"🎨 Detail", label:"Belgická čokoláda", emoji:"🍫💫", bg:"linear-gradient(135deg,#5C3317,#A05A2C)", span:"", big:false },
  { tag:"🎂 Dorty", label:"Narozeninový dort", emoji:"🎂🍦🌈", bg:"linear-gradient(135deg,#C77DFF,#FF6B9D)", span:"md:col-span-2", big:false },
  { tag:"👀 Behind", label:"Ranní příprava", emoji:"⏰🍦❤️", bg:"linear-gradient(135deg,#4ECDC4,#6BCB77)", span:"", big:false },
  { tag:"🏪 Prodejna", label:"Náměstí Míru", emoji:"🏪☀️🌸", bg:"linear-gradient(135deg,#FFD93D,#FF9F43)", span:"", big:false },
  { tag:"👨‍👩‍👧 Rodina", label:"Pro celou rodinu", emoji:"👨‍👩‍👧🍦😊", bg:"linear-gradient(135deg,#FF9F43,#FF6B9D)", span:"", big:false },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [sel, setSel] = useState<number|null>(null);

  return (
    <section id="galerie" ref={ref} className="section dot-bg-mint" style={{ background:"#F0FFF4" }}>
      <div className="wrap">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm mb-5"
            style={{ background:"#C8F5CC", color:"#2E7D32" }}>
            📸 Galerie
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color:"#2D1B10" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}>
              Instagram-worthy<br /><span className="grad-mint">každý záběr</span> 📸
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity:0, scale:0.88 }} animate={inView?{opacity:1,scale:1}:{}}
              transition={{ delay:i*0.07, duration:0.6, ease:[0.22,1,0.36,1] }}
              whileHover={{ scale:1.03, rotate: i%2===0 ? 0.5 : -0.5, zIndex:10 }}
              onClick={() => setSel(i)}
              className={`relative rounded-3xl overflow-hidden cursor-none group ${item.span}`}
              style={{ background:item.bg, boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>

              {/* Emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`select-none ${item.big ? "text-6xl md:text-8xl" : "text-4xl md:text-5xl"}`}
                  style={{ filter:"drop-shadow(0 4px 16px rgba(0,0,0,0.25))", textAlign:"center" }}>
                  {item.emoji}
                </div>
              </div>

              {/* Tag */}
              <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full">
                {item.tag}
              </div>

              {/* Hover overlay */}
              <motion.div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:"linear-gradient(to top,rgba(0,0,0,0.6),transparent 60%)" }}>
                <span className="text-white font-bold text-[14px]">{item.label}</span>
                <span className="text-white/60 text-[11px] mt-0.5">Klepnout pro náhled ⤢</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {sel!==null && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
            style={{ background:"rgba(0,0,0,0.85)", backdropFilter:"blur(16px)" }}
            onClick={() => setSel(null)}>
            <motion.div initial={{ scale:0.8, rotate:-5 }} animate={{ scale:1, rotate:0 }} exit={{ scale:0.85, opacity:0 }}
              transition={{ type:"spring", stiffness:200, damping:20 }}
              className="relative w-full max-w-2xl rounded-4xl overflow-hidden aspect-video flex items-center justify-center"
              style={{ background:items[sel].bg }} onClick={e => e.stopPropagation()}>
              <div className="text-[120px]" style={{ filter:"drop-shadow(0 8px 32px rgba(0,0,0,0.4))" }}>{items[sel].emoji}</div>
              <div className="absolute bottom-6 left-6">
                <div className="text-white/60 text-[11px] font-bold uppercase tracking-wider mb-1">{items[sel].tag}</div>
                <div className="text-white font-bold text-2xl">{items[sel].label}</div>
              </div>
            </motion.div>
            <button onClick={() => setSel(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white cursor-none border border-white/20">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
