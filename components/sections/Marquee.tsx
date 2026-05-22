"use client";
const items = ["Belgická čokoláda 🍫","Madagaskarská vanilka 🌿","Čerstvá jahoda 🍓","Sicilská pistácie 🌰","Mango & Maracuja 🥭","Slaný karamel 🍯","Citronový sorbet 🍋","Malina & bílá čokoláda 🍇","Kokos & limetka 🥥"];
export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="py-5 overflow-hidden border-y" style={{ background:"var(--choco)", borderColor:"rgba(196,117,42,0.2)" }}>
      <div className="flex whitespace-nowrap" style={{ animation:"marquee 22s linear infinite", width:"max-content" }}>
        {doubled.map((item,i)=>(
          <span key={i} className="inline-flex items-center mx-10 text-[13px] font-medium tracking-wide"
            style={{ color: i%3===0?"var(--caramel)":i%3===1?"rgba(245,237,214,0.35)":"rgba(196,117,42,0.6)" }}>
            {item}<span className="ml-10 text-caramel opacity-20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
