"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hours } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const iv = useInView(ref, { once:true, margin:"-80px" });
  const [form, setForm] = useState({ name:"", email:"", msg:"" });
  const [sent, setSent] = useState(false);
  const inp = `w-full rounded-xl px-5 py-4 text-[14px] outline-none transition-all t-body`;

  return (
    <section id="kontakt" ref={ref} className="section" style={{ background:"var(--ink)" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <motion.div initial={{ opacity:0 }} animate={iv?{opacity:1}:{}}
              className="t-label mb-6" style={{ color:"var(--caramel)", letterSpacing:".3em" }}>
              ✦ Kontakt
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2 className="t-display font-black italic"
                style={{ fontSize:"clamp(44px,6vw,88px)", color:"var(--cream)", fontFamily:"var(--display)", lineHeight:.95 }}
                initial={{ y:"110%" }} animate={iv?{y:0}:{}} transition={{ duration:1, ease:[0.22,1,0.36,1] }}>
                Přijďte<br/><span className="grad-text">ochutnat</span>
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity:0 }} animate={iv?{opacity:1}:{}} transition={{ delay:.3 }}
            className="t-body text-[16px] md:text-right" style={{ color:"rgba(251,245,235,.45)" }}>
            Čekáme na vás každý den na Náměstí Míru v Mladé Boleslavi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left info */}
          <div className="space-y-5">
            {/* Hours */}
            <motion.div initial={{ opacity:0, y:20 }} animate={iv?{opacity:1,y:0}:{}} transition={{ delay:.15 }}
              className="glass rounded-2xl overflow-hidden">
              <div className="px-7 py-5" style={{ borderBottom:"1px solid rgba(212,175,55,.1)" }}>
                <span className="t-label" style={{ color:"var(--caramel)", letterSpacing:".25em" }}>Otevírací doba</span>
              </div>
              {hours.map((h,i)=>(
                <motion.div key={h.day} initial={{ opacity:0, x:-12 }} animate={iv?{opacity:1,x:0}:{}}
                  transition={{ delay:.25+i*.07 }}
                  className="flex items-center justify-between px-7 py-4" style={{ borderBottom:"1px solid rgba(255,255,255,.03)" }}>
                  <span className="t-body text-[14px]" style={{ color:"rgba(251,245,235,.5)" }}>{h.day}</span>
                  <div className="flex items-center gap-3">
                    {h.note && (
                      <span className="t-label px-2.5 py-1 rounded-full"
                        style={{ background:h.note==="Prodlouženo"?"rgba(74,158,106,.15)":"rgba(196,117,42,.12)",
                          color:h.note==="Prodlouženo"?"var(--pista)":"var(--caramel)", fontSize:"8px", letterSpacing:".12em" }}>
                        {h.note}
                      </span>
                    )}
                    <span className="font-semibold text-[15px]" style={{ color:"var(--cream)" }}>{h.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity:0, y:20 }} animate={iv?{opacity:1,y:0}:{}} transition={{ delay:.3 }}
              className="glass rounded-2xl p-7">
              <div className="t-label mb-4" style={{ color:"rgba(212,175,55,.5)", letterSpacing:".25em" }}>Adresa</div>
              <div className="t-display text-2xl italic font-bold mb-4" style={{ color:"var(--cream)", fontFamily:"var(--display)" }}>
                Náměstí Míru 12<br/>293 01 Mladá Boleslav
              </div>
              <div className="flex items-center gap-2">
                <motion.span className="w-2 h-2 rounded-full" style={{ background:"var(--pista)" }}
                  animate={{ scale:[1,1.6,1], opacity:[1,.4,1] }} transition={{ duration:2, repeat:Infinity }} />
                <span className="text-[13px] font-semibold" style={{ color:"var(--pista)" }}>Právě otevřeno</span>
                <span className="text-[13px]" style={{ color:"rgba(251,245,235,.3)" }}>· zavíráme v 20:00</span>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div initial={{ opacity:0, scale:.95 }} animate={iv?{opacity:1,scale:1}:{}} transition={{ delay:.35, duration:.8 }}
              className="relative rounded-2xl overflow-hidden" style={{ height:240, background:"linear-gradient(145deg,#0A1F10,#1A3A20,#2A5C30)" }}>
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 240">
                <defs><pattern id="g2" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#4a7a3a" strokeWidth=".5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#g2)"/>
                <rect x="170" y="0" width="55" height="240" fill="white" opacity=".5" rx="2"/>
                <rect x="0" y="110" width="500" height="45" fill="white" opacity=".5" rx="2"/>
              </svg>
              <div className="absolute" style={{ left:"40%", top:"38%", transform:"translate(-50%,-100%)" }}>
                <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }} className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{ background:"var(--choco)", boxShadow:"0 8px 32px rgba(0,0,0,.5)" }}>🍦</div>
                  <motion.div className="absolute inset-0 rounded-full border border-caramel"
                    animate={{ scale:[1,2.5], opacity:[.6,0] }} transition={{ duration:2, repeat:Infinity }} />
                </motion.div>
              </div>
              <div className="absolute bottom-4 inset-x-4">
                <div className="glass rounded-xl p-3">
                  <div className="t-display italic font-bold text-lg text-cream" style={{ fontFamily:"var(--display)" }}>Zmrzlina TRIO</div>
                  <div className="t-label mt-1" style={{ letterSpacing:".1em", opacity:.5 }}>Náměstí Míru 12, Mladá Boleslav</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div initial={{ opacity:0, y:20 }} animate={iv?{opacity:1,y:0}:{}} transition={{ delay:.4 }}
            className="glass rounded-2xl p-8">
            <div className="t-label mb-8" style={{ color:"var(--caramel)", letterSpacing:".3em" }}>Napište nám</div>
            {sent ? (
              <motion.div initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-16">
                <div className="text-6xl mb-4 float">🎉</div>
                <div className="t-display text-3xl italic font-bold text-cream mb-2" style={{ fontFamily:"var(--display)" }}>Odesláno!</div>
                <div className="t-label opacity-40" style={{ letterSpacing:".2em" }}>Ozveme se brzy</div>
              </motion.div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setTimeout(()=>setSent(true),400);}} className="space-y-4">
                {[
                  { ph:"Vaše jméno", key:"name", type:"text" },
                  { ph:"E-mailová adresa", key:"email", type:"email" },
                ].map(f=>(
                  <input key={f.key} type={f.type} placeholder={f.ph} required
                    className={inp}
                    value={form[f.key as keyof typeof form]}
                    onChange={e=>setForm({...form,[f.key]:e.target.value})}
                    style={{ background:"rgba(251,245,235,.04)", border:"1px solid rgba(212,175,55,.15)", color:"var(--cream)" }} />
                ))}
                <textarea placeholder="Zpráva nebo objednávka dortu…" required
                  className={`${inp} resize-none h-32`}
                  value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})}
                  style={{ background:"rgba(251,245,235,.04)", border:"1px solid rgba(212,175,55,.15)", color:"var(--cream)" }} />
                <motion.button type="submit" whileHover={{ scale:1.02, boxShadow:"0 12px 40px rgba(196,117,42,.35)" }}
                  whileTap={{ scale:.98 }}
                  className="w-full btn-gold py-4 rounded-xl font-bold text-[11px] cursor-none tracking-[.12em] uppercase">
                  Odeslat zprávu
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
