export const flavors = [
  { id:"choco", name:"Belgická čokoláda", en:"Belgian Dark Chocolate", desc:"72% kakao z Bruselu. Hluboká, intenzivní, hedvábná dohořka pro skutečné labužníky.", price:35, color:"#5C3015", gradient:"linear-gradient(135deg,#3D1505,#5C3015,#8B4513)", light:"#F5EAE0", emoji:"🍫", notes:["Kakao 72%","Vanilkový extrakt","Špetka soli"], pairing:"Espresso · Červené víno", tags:["Bestseller"], num:"01" },
  { id:"vanilla", name:"Madagaskarská vanilka", en:"Madagascar Bourbon Vanilla", desc:"Pravé lusky Bourbon vanilky s viditelnými tečkami. Krémová, hřejivá elegance.", price:35, color:"#C4901A", gradient:"linear-gradient(135deg,#8B6914,#C4901A,#E8C040)", light:"#FEF9EC", emoji:"🌿", notes:["Vanilka Bourbon","Smetana 36%","Alpské mléko"], pairing:"Čerstvé ovoce · Karamel", tags:["Classic"], num:"02" },
  { id:"jahoda", name:"Čerstvá jahoda", en:"Fresh Local Strawberry", desc:"Jahody od pěstitelů z okolí Mladé Boleslavi. Bez barviv — čistá ovocná radost léta.", price:35, color:"#C73D57", gradient:"linear-gradient(135deg,#8B1A30,#C73D57,#E8526A)", light:"#FDEAF0", emoji:"🍓", notes:["Jahody z MB kraje","Citronová kůra","Třtinový cukr"], pairing:"Šampaňské · Bílá čokoláda", tags:["Sezónní","Lokální"], num:"03" },
];
export const menuItems = [
  { cat:"kornouty", label:"Kornouty", icon:"🍦", items:[
    { name:"Jednoduchý kornout", desc:"1 kopeček dle výběru, waflový kornout", price:35, tag:null },
    { name:"Dvojitý kornout", desc:"2 kopečky, různé příchutě", price:65, tag:null },
    { name:"TRIO kornout", desc:"Všechny 3 signature příchutě", price:95, tag:"Bestseller" },
    { name:"Dětský kornout", desc:"Malá porce, veselý posyp", price:25, tag:null },
  ]},
  { cat:"pohary", label:"Poháry", icon:"🥂", items:[
    { name:"Klasický pohár", desc:"2 kopečky, šlehačka, oříšky", price:79, tag:null },
    { name:"Pohár TRIO", desc:"3 kopečky, šlehačka, karamelová omáčka", price:115, tag:"Top volba" },
    { name:"Letní pohár", desc:"Jahoda, mango, sezónní ovoce, máta", price:99, tag:"Letní" },
    { name:"Dětský pohár", desc:"1 kopeček, šlehačka, posyp", price:45, tag:null },
  ]},
  { cat:"special", label:"Speciality", icon:"⭐", items:[
    { name:"Zmrzlinový dort", desc:"Na objednávku, min. 1 kg, 72h předem", price:580, tag:"Objednávka" },
    { name:"Affogato", desc:"Vanilková zmrzlina + double espresso", price:65, tag:"Nové" },
    { name:"Zmrzlinový sendvič", desc:"Domácí máslové oplatky, 2 kopečky", price:55, tag:null },
    { name:"Denní speciál", desc:"Sezónní příchuť — každý den jiná", price:35, tag:"Dnes" },
  ]},
];
export const hours = [
  { day:"Pondělí – Pátek", time:"10:00 – 20:00", note:null },
  { day:"Sobota", time:"09:00 – 21:00", note:"Prodlouženo" },
  { day:"Neděle", time:"09:00 – 21:00", note:"Prodlouženo" },
  { day:"Státní svátky", time:"10:00 – 18:00", note:"Zkráceno" },
];
export const timeline = [
  { year:"2009", title:"Začátek příběhu", desc:"Otevřeli jsme první stánek na Náměstí Míru. Jen tři příchutě a velký sen." },
  { year:"2012", title:"Vlastní receptury", desc:"Po třech letech vývoje vznikly naše signature příchutě. Belgická čokoláda se stala legendou." },
  { year:"2016", title:"Lokální spolupráce", desc:"Navázali jsme partnerství s místními pěstiteli jahod. Farm-to-scoop filozofie." },
  { year:"2020", title:"Přes krizi vpřed", desc:"I během pandemie jsme zůstali otevřeni. Zavedli jsme online objednávky a rozvoz." },
  { year:"2025", title:"TRIO dnes", desc:"Stovky tisíc kopečků. Tisíce spokojených zákazníků. Stále tři základní příchutě, stále s láskou." },
];
