"use client";
const items = ["Belgická čokoláda","Madagascar Vanilla","Čerstvá jahoda","Sicilská pistácie","Slaný karamel","Mango & Maracuja","Citronový sorbet","Malina Bílá čokoláda","Grand Cru Reserve"];
export default function Marquee() {
  const d = [...items,...items];
  return (
    <div className="py-4 overflow-hidden" style={{ background:"var(--chocolate)", borderTop:"1px solid rgba(212,175,55,.1)", borderBottom:"1px solid rgba(212,175,55,.1)" }}>
      <div className="flex whitespace-nowrap" style={{ animation:"marquee 24s linear infinite", width:"max-content" }}>
        {d.map((item,i)=>(
          <span key={i} className="inline-flex items-center mx-10"
            style={{ fontFamily:"var(--mono)", fontSize:"10px", letterSpacing:".28em", textTransform:"uppercase",
              color: i%3===0?"var(--caramel)":i%3===1?"rgba(251,245,235,.3)":"rgba(212,175,55,.5)" }}>
            {item}
            <span className="ml-10" style={{ color:"var(--gold)", opacity:.2 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
