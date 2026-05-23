"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 px-6 md:px-10" style={{ background:"#050200" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="t-display font-black italic text-white/[0.02] whitespace-nowrap leading-none"
          style={{ fontSize:"28vw", fontFamily:"var(--display)" }}>TRIO</span>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="t-display text-3xl italic font-bold text-cream mb-4" style={{ fontFamily:"var(--display)" }}>TRIO</div>
            <p className="t-body text-[13px] leading-relaxed" style={{ color:"rgba(251,245,235,.3)" }}>
              Točená zmrzlina s tradicí od roku 2009. Belgická čokoláda, madagaskarská vanilka, čerstvá jahoda. Mladá Boleslav.
            </p>
            <div className="flex gap-3 mt-6">
              {["📸","💬","✉️"].map((icon,i)=>(
                <motion.a key={i} href="#" whileHover={{ scale:1.1, y:-2 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center cursor-none text-base"
                  style={{ textDecoration:"none" }}>{icon}</motion.a>
              ))}
            </div>
          </div>
          <div>
            <div className="t-label mb-6" style={{ color:"rgba(212,175,55,.45)", letterSpacing:".25em" }}>Navigace</div>
            {["Příchutě","Menu","Galerie","O nás","Kontakt"].map(l=>(
              <motion.a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(" ","-")}`}
                whileHover={{ x:4, color:"var(--caramel)" }}
                className="block t-body text-[14px] mb-3 transition-colors" style={{ color:"rgba(251,245,235,.25)", textDecoration:"none" }}>
                {l}
              </motion.a>
            ))}
          </div>
          <div>
            <div className="t-label mb-6" style={{ color:"rgba(212,175,55,.45)", letterSpacing:".25em" }}>Kontakt</div>
            <div className="space-y-2.5 t-body text-[14px]" style={{ color:"rgba(251,245,235,.3)" }}>
              <div>Náměstí Míru 12</div>
              <div>293 01 Mladá Boleslav</div>
              <div className="pt-2">+420 326 123 456</div>
              <div>trio@zmrzlina.cz</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop:"1px solid rgba(255,255,255,.05)" }}>
          <div className="t-label" style={{ opacity:.2, letterSpacing:".15em" }}>© 2025 Zmrzlina TRIO · Všechna práva vyhrazena</div>
          <div className="flex gap-6">
            {["GDPR","Podmínky","Cookies"].map(l=>(
              <a key={l} href="#" className="t-label hover:opacity-50 transition-opacity"
                style={{ opacity:.2, letterSpacing:".15em", textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
