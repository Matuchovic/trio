"use client";
const items = ["🍦 Točená zmrzlina","🍫 Belgická čokoláda","🌿 Madagaskarská vanilka","🍓 Čerstvá jahoda","🌰 Sicilská pistácie","🥭 Mango & Maracuja","🍯 Slaný karamel","🍋 Citronový sorbet","🥥 Kokos & limetka","🍇 Malina & bílá čokoláda"];
export default function Marquee() {
  const doubled = [...items,...items];
  return (
    <div className="py-4 overflow-hidden border-y-2" style={{ background:"#5C3317", borderColor:"#3D1F0D" }}>
      <div className="flex whitespace-nowrap" style={{ animation:"marquee 20s linear infinite", width:"max-content" }}>
        {doubled.map((item,i)=>(
          <span key={i} className="inline-flex items-center mx-8 text-[13px] font-bold"
            style={{ color: i%3===0?"#FFD93D":i%3===1?"rgba(255,245,230,0.6)":"#FF6B9D" }}>
            {item}
            <span className="ml-8 opacity-30" style={{ color:"#FFD93D" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
