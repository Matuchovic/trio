"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 px-6 md:px-10" style={{ background:"#2D1B10" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[30vw] font-bold text-white/[0.03] whitespace-nowrap leading-none">TRIO</span>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍦</span>
              <span className="font-display text-3xl font-semibold text-white">TRIO</span>
            </div>
            <p className="text-[13px] leading-relaxed font-semibold" style={{ color:"rgba(255,245,230,0.4)" }}>
              Točená zmrzlina s tradicí od roku 2009. Belgická čokoláda, madagaskarská vanilka, čerstvá jahoda. Mladá Boleslav.
            </p>
            <div className="flex gap-3 mt-5">
              {["📸","💬","📧"].map((icon,i)=>(
                <motion.a key={i} href="#" whileHover={{ scale:1.15, y:-3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg cursor-none"
                  style={{ background:"rgba(255,107,157,0.15)", border:"1.5px solid rgba(255,107,157,0.3)", textDecoration:"none" }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color:"rgba(255,107,157,0.6)" }}>Navigace</div>
            {["Příchutě","Menu","Galerie","O nás","Kontakt"].map(l=>(
              <motion.a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(" ","-")}`}
                whileHover={{ x:4, color:"#FF6B9D" }}
                className="block text-[14px] font-semibold mb-3 transition-colors" style={{ color:"rgba(255,245,230,0.35)", textDecoration:"none" }}>
                {l}
              </motion.a>
            ))}
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color:"rgba(255,107,157,0.6)" }}>Kontakt</div>
            <div className="space-y-3 text-[14px] font-semibold" style={{ color:"rgba(255,245,230,0.4)" }}>
              <div>📍 Náměstí Míru 12</div>
              <div>🏙️ 293 01 Mladá Boleslav</div>
              <div>📞 +420 326 123 456</div>
              <div>✉️ trio@zmrzlina.cz</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor:"rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color:"rgba(255,245,230,0.2)" }}>
            <span>🍦</span>
            <span>© 2025 Zmrzlina TRIO · Všechna práva vyhrazena</span>
          </div>
          <div className="flex gap-5">
            {["GDPR","Podmínky","Cookies"].map(l=>(
              <a key={l} href="#" className="text-[12px] font-semibold hover:text-pink transition-colors" style={{ color:"rgba(255,245,230,0.2)", textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
