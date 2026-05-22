"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 px-6 md:px-10" style={{ background: "var(--choco-deep)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[32vw] italic font-black text-white/[0.025] whitespace-nowrap leading-none">TRIO</span>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-display text-4xl italic text-white font-light mb-4">TRIO</div>
            <p className="text-[13px] leading-relaxed text-vanilla/35 max-w-xs">Točená zmrzlina s tradicí od roku 2009. Tři signature příchutě, jeden nezapomenutelný letní zážitek.</p>
          </div>
          <div>
            <div className="label text-caramel/50 mb-5">Navigace</div>
            {["Příchutě","Menu","Galerie","O nás","Kontakt"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(" ","-").replace("á","a").replace("í","i").replace("é","e")}`}
                className="block text-[14px] text-vanilla/30 hover:text-caramel transition-colors mb-3" style={{ textDecoration:"none" }}>{l}</a>
            ))}
          </div>
          <div>
            <div className="label text-caramel/50 mb-5">Kontakt</div>
            <div className="space-y-3 text-[14px] text-vanilla/35">
              <div>Náměstí Míru 12</div>
              <div>293 01 Mladá Boleslav</div>
              <div className="pt-2">+420 326 123 456</div>
              <div>trio@zmrzlina.cz</div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.05]">
          <div className="text-[12px] text-vanilla/20">© 2025 Zmrzlina TRIO · Všechna práva vyhrazena</div>
          <div className="flex gap-6">
            {["GDPR","Podmínky","Cookies"].map(l => (
              <a key={l} href="#" className="text-[12px] text-vanilla/20 hover:text-vanilla/50 transition-colors" style={{ textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
