"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hours } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  const [form, setForm] = useState({ name:"", email:"", msg:"" });
  const [sent, setSent] = useState(false);
  const inp = "w-full bg-white/60 border border-caramel/15 rounded-xl px-4 py-3.5 text-[14px] outline-none focus:border-caramel/40 focus:bg-white/90 transition-all";

  return (
    <section id="kontakt" ref={ref} className="section" style={{ background:"var(--choco)" }}>
      <div className="wrap">
        <div className="mb-16">
          <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} className="label mb-4" style={{ color:"var(--caramel)" }}>✦ Kontakt</motion.div>
          <div className="overflow-hidden">
            <motion.h2 className="font-display text-5xl md:text-7xl font-light italic" style={{ color:"var(--vanilla)" }}
              initial={{ y:"110%" }} animate={inView?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
              Přijďte<br /><span className="grad-text">ochutnat</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-5">
            {/* Hours */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.2 }}
              className="glass-dark rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-caramel/15">
                <span className="label" style={{ color:"var(--caramel)" }}>Otevírací doba</span>
              </div>
              {hours.map((h,i)=>(
                <motion.div key={h.day} initial={{ opacity:0, x:-12 }} animate={inView?{opacity:1,x:0}:{}} transition={{ delay:0.3+i*0.07 }}
                  className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04] last:border-0">
                  <span className="text-[14px]" style={{ color:"rgba(245,237,214,0.6)" }}>{h.day}</span>
                  <div className="flex items-center gap-3">
                    {h.note && <span className="label px-2 py-1 rounded-full" style={{
                      background:h.note==="Prodlouženo"?"rgba(74,191,160,0.15)":"rgba(196,117,42,0.15)",
                      color:h.note==="Prodlouženo"?"var(--pistachio)":"var(--caramel)", fontSize:"9px" }}>{h.note}</span>}
                    <span className="font-semibold text-[15px]" style={{ color:"var(--vanilla)" }}>{h.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.35 }}
              className="glass-dark rounded-2xl p-6">
              <div className="label mb-3" style={{ color:"rgba(196,117,42,0.6)" }}>Adresa</div>
              <div className="font-display text-2xl italic font-light mb-4" style={{ color:"var(--vanilla)" }}>
                Náměstí Míru 12<br />293 01 Mladá Boleslav
              </div>
              <div className="flex items-center gap-2">
                <motion.div className="w-2 h-2 rounded-full" style={{ background:"var(--pistachio)" }}
                  animate={{ scale:[1,1.5,1], opacity:[1,0.4,1] }} transition={{ duration:2, repeat:Infinity }} />
                <span className="text-[13px] font-medium" style={{ color:"var(--pistachio)" }}>Právě otevřeno</span>
                <span className="text-[13px]" style={{ color:"rgba(245,237,214,0.3)" }}>· zavíráme v 20:00</span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.45 }} className="flex gap-3">
              {[{l:"Instagram",e:"📸"},{l:"Facebook",e:"💬"},{l:"+420 326 123 456",e:"📞"}].map(s=>(
                <motion.a key={s.l} href="#" whileHover={{ scale:1.04 }}
                  className="flex-1 flex flex-col items-center gap-1.5 glass-dark rounded-xl py-4 text-center cursor-none" style={{ textDecoration:"none" }}>
                  <span className="text-xl">{s.e}</span>
                  <span className="label" style={{ color:"rgba(245,237,214,0.4)", fontSize:"9px" }}>{s.l}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Map + Form */}
          <div className="space-y-5">
            {/* Map */}
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ delay:0.25, duration:0.8 }}
              className="relative rounded-3xl overflow-hidden" style={{ height:320, background:"linear-gradient(145deg,#c4dbb8,#aecfa8,#c8e0c0)" }}>
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 320">
                <defs><pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#4a7a3a" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#g)"/>
                <rect x="170" y="0" width="60" height="320" fill="white" opacity="0.6" rx="2"/>
                <rect x="0" y="135" width="500" height="50" fill="white" opacity="0.6" rx="2"/>
                <rect x="290" y="0" width="38" height="320" fill="white" opacity="0.35" rx="2"/>
              </svg>
              <div className="absolute" style={{ left:"40%", top:"38%", transform:"translate(-50%,-100%)" }}>
                <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }} className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl relative"
                    style={{ background:"var(--choco)", boxShadow:"0 8px 32px rgba(61,31,13,0.5)" }}>🍦</div>
                  <motion.div className="absolute inset-0 rounded-full border-2 border-caramel"
                    animate={{ scale:[1,2.8], opacity:[0.7,0] }} transition={{ duration:2, repeat:Infinity }} />
                </motion.div>
                <div className="w-4 h-1.5 rounded-full mx-auto mt-1" style={{ background:"rgba(61,31,13,0.2)" }} />
              </div>
              <div className="absolute bottom-4 inset-x-4">
                <div className="glass rounded-xl p-4">
                  <div className="font-display text-lg italic font-semibold" style={{ color:"var(--choco)" }}>Zmrzlina TRIO</div>
                  <div className="text-[12px] mt-0.5" style={{ color:"var(--choco-mid)", opacity:0.7 }}>Náměstí Míru 12, Mladá Boleslav</div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.4 }}
              className="glass-dark rounded-2xl p-6">
              <div className="label mb-5" style={{ color:"var(--caramel)" }}>Napište nám</div>
              {sent ? (
                <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-8">
                  <div className="text-5xl mb-3">🎉</div>
                  <div className="font-display text-2xl italic" style={{ color:"var(--vanilla)" }}>Odesláno!</div>
                  <div className="text-[13px] mt-2" style={{ color:"rgba(245,237,214,0.4)" }}>Ozvu se brzy.</div>
                </motion.div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setTimeout(()=>setSent(true),400);}} className="space-y-3">
                  <input className={inp} placeholder="Vaše jméno" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required style={{ color:"var(--choco)" }} />
                  <input type="email" className={inp} placeholder="E-mailová adresa" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={{ color:"var(--choco)" }} />
                  <textarea className={`${inp} resize-none h-28`} placeholder="Vaše zpráva nebo objednávka dortu…" value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} required style={{ color:"var(--choco)" }} />
                  <motion.button type="submit" whileHover={{ scale:1.02, boxShadow:"0 12px 32px rgba(196,117,42,0.4)" }} whileTap={{ scale:0.98 }}
                    className="w-full shimmer text-white py-3.5 rounded-xl font-semibold text-[14px] cursor-none">
                    Odeslat zprávu →
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
