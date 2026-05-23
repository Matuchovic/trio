"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hours } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [form, setForm] = useState({ name:"", email:"", msg:"" });
  const [sent, setSent] = useState(false);
  const inp = "w-full bg-white border-2 border-pink-l/40 rounded-2xl px-4 py-3.5 text-[14px] font-semibold outline-none focus:border-pink transition-all placeholder-pink-l/60";

  return (
    <section id="kontakt" ref={ref} className="section"
      style={{ background:"linear-gradient(160deg,#FF6B9D 0%,#FF4757 40%,#FF9F43 80%,#FFD93D 100%)" }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
            className="font-display text-5xl md:text-6xl font-semibold text-white mb-3">
            Přijďte ochutnat! 🍦
          </motion.h2>
          <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.2 }}
            className="text-white/75 text-lg font-semibold">
            Čekáme na vás každý den na Náměstí Míru
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-5">
            {/* Hours card */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.15 }}
              className="bg-white/15 backdrop-blur-md rounded-3xl overflow-hidden border border-white/25">
              <div className="px-6 py-4 border-b border-white/20">
                <span className="text-white font-bold text-[13px] uppercase tracking-widest">🕙 Otevírací doba</span>
              </div>
              {hours.map((h, i) => (
                <div key={h.day} className="flex items-center justify-between px-6 py-4 border-b border-white/10 last:border-0">
                  <span className="text-white/80 font-semibold text-[14px]">{h.day}</span>
                  <span className="text-white font-bold text-[15px]">{h.time}</span>
                </div>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.25 }}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/25">
              <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3">📍 Adresa</div>
              <div className="font-display text-2xl text-white font-semibold mb-3">
                Náměstí Míru 12<br />293 01 Mladá Boleslav
              </div>
              <div className="flex items-center gap-2">
                <motion.span className="w-2.5 h-2.5 rounded-full bg-mint" animate={{ scale:[1,1.5,1] }} transition={{ duration:1.5, repeat:Infinity }} />
                <span className="text-white font-bold text-[13px]">Právě otevřeno</span>
                <span className="text-white/50 text-[13px] font-semibold">· zavíráme v 20:00</span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.35 }}
              className="grid grid-cols-3 gap-3">
              {[{l:"Instagram",e:"📸"},{l:"Facebook",e:"💬"},{l:"Telefon",e:"📞"}].map(s => (
                <motion.a key={s.l} href="#" whileHover={{ scale:1.07, y:-3 }} whileTap={{ scale:0.95 }}
                  className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-sm rounded-2xl py-4 border border-white/20 cursor-none"
                  style={{ textDecoration:"none" }}>
                  <span className="text-2xl">{s.e}</span>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider">{s.l}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Map + Form */}
          <div className="space-y-5">
            {/* Map */}
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ delay:0.2, duration:0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-white/25" style={{ height:280, background:"linear-gradient(145deg,#c4dbb8,#b0d4a8,#c8e0c0)" }}>
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 280">
                <defs><pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#4a7a3a" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#g)"/>
                <rect x="170" y="0" width="55" height="280" fill="white" opacity="0.6" rx="2"/>
                <rect x="0" y="120" width="500" height="50" fill="white" opacity="0.6" rx="2"/>
              </svg>
              <div className="absolute" style={{ left:"40%", top:"35%", transform:"translate(-50%,-100%)" }}>
                <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }} className="relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                    style={{ background:"white", boxShadow:"0 8px 32px rgba(0,0,0,0.2)" }}>🍦</div>
                  <motion.div className="absolute inset-0 rounded-full border-4 border-pink"
                    animate={{ scale:[1,2.5], opacity:[0.6,0] }} transition={{ duration:2, repeat:Infinity }} />
                </motion.div>
              </div>
              <div className="absolute bottom-4 inset-x-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3">
                  <div className="font-bold text-[15px]" style={{ color:"#2D1B10" }}>🍦 Zmrzlina TRIO</div>
                  <div className="text-[12px] font-semibold mt-0.5" style={{ color:"#6B4226" }}>Náměstí Míru 12, Mladá Boleslav</div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.35 }}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/25">
              <div className="text-white font-bold text-[13px] uppercase tracking-widest mb-5">✉️ Napište nám</div>
              {sent ? (
                <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-8">
                  <div className="text-6xl mb-3">🎉</div>
                  <div className="font-display text-3xl text-white font-semibold">Odesláno!</div>
                  <div className="text-white/60 font-semibold mt-2">Ozveme se brzy. 🍦</div>
                </motion.div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setTimeout(()=>setSent(true),400);}} className="space-y-3">
                  <input className={inp} placeholder="Vaše jméno" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required style={{ color:"#2D1B10" }} />
                  <input type="email" className={inp} placeholder="E-mail" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={{ color:"#2D1B10" }} />
                  <textarea className={`${inp} resize-none h-28`} placeholder="Zpráva nebo objednávka dortu 🎂…" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required style={{ color:"#2D1B10" }} />
                  <motion.button type="submit" whileHover={{ scale:1.03, boxShadow:"0 12px 32px rgba(0,0,0,0.2)" }} whileTap={{ scale:0.97 }}
                    className="w-full bg-white font-bold py-4 rounded-2xl text-[15px] cursor-none" style={{ color:"#FF4757" }}>
                    Odeslat zprávu 🚀
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave top (inverted bottom wave for section above) */}
      <div className="absolute top-0 left-0 right-0" style={{ transform:"translateY(-99%)" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FF6B9D"/>
        </svg>
      </div>
    </section>
  );
}
