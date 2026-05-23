export const flavors = [
  { id:"choco", name:"Belgická čokoláda", en:"Belgian Dark Chocolate", tag:"#1 Bestseller", desc:"72% kakao z Bruselu. Hluboká, intenzivní, hedvábná dohořka.", price:35, color:"#5C3317", bg:"linear-gradient(135deg,#3D1505 0%,#7B3F1A 50%,#A05A2C 100%)", textColor:"#FFE5CC", emoji:"🍫", rating:4.9, reviews:1240, tag2:"Nejoblíbenější", num:"01" },
  { id:"vanilla", name:"Madagaskarská vanilka", en:"Madagascar Bourbon Vanilla", tag:"Klasika", desc:"Pravé lusky Bourbon vanilky. Krémová, s tečkami, hřejivá.", price:35, color:"#C4901A", bg:"linear-gradient(135deg,#8B6914 0%,#C4901A 50%,#E8C040 100%)", textColor:"#3D2800", emoji:"🌿", rating:4.8, reviews:980, tag2:"Classic", num:"02" },
  { id:"jahoda", name:"Čerstvá jahoda", en:"Fresh Local Strawberry", tag:"Sezónní", desc:"Jahody přímo od pěstitelů z Mladé Boleslavi. Bez barviv.", price:35, color:"#C73D57", bg:"linear-gradient(135deg,#8B1A30 0%,#C73D57 50%,#FF6B8A 100%)", textColor:"#FFE5EC", emoji:"🍓", rating:4.9, reviews:1450, tag2:"Lokální 🌱", num:"03" },
  { id:"pistachio", name:"Sicilská pistácie", en:"Sicilian Pistachio DOP", tag:"Premium", desc:"Pistácie Bronte DOP ze Sicílie. Luxusní, ořechová, jedinečná.", price:40, color:"#3A7D44", bg:"linear-gradient(135deg,#1E5C28 0%,#3A7D44 50%,#6BCB77 100%)", textColor:"#E0FFE5", emoji:"🌰", rating:4.7, reviews:640, tag2:"Limitovaná", num:"04" },
  { id:"mango", name:"Mango & Maracuja", en:"Mango & Passion Fruit Sorbet", tag:"Vegan", desc:"Tropický sorbet bez mléka. Alphonso mango + maracuja. Letní exploze.", price:38, color:"#E07B20", bg:"linear-gradient(135deg,#C45500 0%,#E07B20 50%,#FFB347 100%)", textColor:"#FFF3E0", emoji:"🥭", rating:4.8, reviews:720, tag2:"Bez laktózy", num:"05" },
  { id:"caramel", name:"Slaný karamel", en:"Salted Caramel Swirl", tag:"Oblíbené", desc:"Ručně karamelizovaný cukr + bretaňská mořská sůl. Dokonalá rovnováha.", price:38, color:"#B8560A", bg:"linear-gradient(135deg,#7A3500 0%,#B8560A 50%,#E8883A 100%)", textColor:"#FFE5CC", emoji:"🍯", rating:4.9, reviews:890, tag2:"Award winning", num:"06" },
];

export const menuItems = [
  { cat:"kornouty", label:"Kornouty", icon:"🍦", color:"#FF6B9D", items:[
    { name:"Jednoduchý kornout", desc:"1 kopeček dle výběru, waflový kornout", price:35, hot:false },
    { name:"Dvojitý kornout", desc:"2 kopečky, různé příchutě", price:65, hot:false },
    { name:"TRIO kornout ✨", desc:"Všechny 3 signature příchutě", price:95, hot:true },
    { name:"Dětský kornout", desc:"Malá porce + posyp", price:25, hot:false },
  ]},
  { cat:"pohary", label:"Poháry", icon:"🥂", color:"#6BCB77", items:[
    { name:"Klasický pohár", desc:"2 kopečky, šlehačka, oříšky", price:79, hot:false },
    { name:"Pohár TRIO 🏆", desc:"3 kopečky, šlehačka, karamel, posyp", price:115, hot:true },
    { name:"Letní pohár", desc:"Jahoda, mango, sezónní ovoce, máta", price:99, hot:false },
    { name:"Dětský pohár", desc:"1 kopeček, šlehačka, posyp", price:45, hot:false },
  ]},
  { cat:"special", label:"Speciální", icon:"⭐", color:"#FFD93D", items:[
    { name:"Zmrzlinový dort 🎂", desc:"Na objednávku, min. 72h předem, od 1 kg", price:580, hot:true },
    { name:"Affogato ☕", desc:"Vanilka + double espresso — italský klasik", price:65, hot:false },
    { name:"Zmrzlinový sendvič", desc:"Domácí oplatky + 2 kopečky", price:55, hot:false },
    { name:"Denní speciál 🌟", desc:"Sezónní příchuť — každý den jiná", price:35, hot:false },
  ]},
];

export const hours = [
  { day:"Pondělí – Pátek", time:"10:00 – 20:00", open:true },
  { day:"Sobota", time:"09:00 – 21:00", open:true },
  { day:"Neděle", time:"09:00 – 21:00", open:true },
  { day:"Státní svátky", time:"10:00 – 18:00", open:true },
];

export const timeline = [
  { year:"2009", title:"Začátek příběhu", desc:"Otevřeli jsme první stánek na Náměstí Míru. Jen tři příchutě a velký sen." },
  { year:"2012", title:"Vlastní receptury", desc:"Po třech letech vývoje vznikly naše signature příchutě. Belgická čokoláda se stala legendou." },
  { year:"2016", title:"Lokální spolupráce", desc:"Navázali jsme partnerství s místními pěstiteli jahod. Farm-to-scoop filozofie." },
  { year:"2020", title:"Přes krizi vpřed", desc:"I během pandemie jsme zůstali otevřeni. Zavedli jsme rozvoz a online objednávky." },
  { year:"2025", title:"TRIO dnes", desc:"Stovky tisíc kopečků. Tisíce spokojených zákazníků. Stále tři příchutě, stále s láskou." },
];

export const testimonials = [
  { name:"Markéta V.", text:"Nejlepší zmrzlina v Mladé Boleslavi! TRIO kornout je naše rodinná tradice každé léto.", stars:5, emoji:"👩‍👧‍👦" },
  { name:"Tomáš K.", text:"Belgická čokoláda je absolutní pecka. Chuť na úrovni prémiových pražiček. Palec nahoru!", stars:5, emoji:"👨‍💼" },
  { name:"Jana M.", text:"Jahody jsou fakt čerstvé, cítíte to okamžitě. Žádná chemie, přirozená chuť. Super!", stars:5, emoji:"🌸" },
  { name:"Pavel R.", text:"Slaný karamel — to je zjevení! Nikdy jsem neočekával, že budu závislý na zmrzlině.", stars:5, emoji:"🤤" },
  { name:"Lucie H.", text:"Děti milují dětský pohár, já si dám vždy TRIO. Každý si přijde na své. Skvělé místo!", stars:5, emoji:"🎉" },
];
