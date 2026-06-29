// Single source of truth for Heavy Iron Logistics site copy & data.

export const company = {
  name: "Heavy Iron Logistics",
  legal: "Trelzo LLC",
  tagline: "Oversized. Overweight. Over-delivered.",
  phone: "+1 956-522-0382",
  phoneHref: "+19565220382",
  email: "dispatch@heavyironlogistics.com",
  address: {
    line1: "2005 E Griffin Pkwy, Ste A",
    city: "Mission",
    state: "TX",
    zip: "78572",
  },
  yard: "Hidalgo, TX",
  usdot: "2541334",
  mc: "MC-884820",
  regions: ["United States", "Canada", "Mexico"],
};

export const stats = [
  { value: "3", label: "Countries served", sub: "US · Canada · Mexico" },
  { value: "200K+", label: "Lbs hauled per load", sub: "Heavy & oversized" },
  { value: "FMCSA", label: "Authorized carrier", sub: `USDOT ${company.usdot}` },
  { value: "24/7", label: "Dispatch & tracking", sub: "Border-region based" },
];

export const services = [
  {
    title: "Construction Equipment",
    body: "Earthmovers, excavators, dozers, and infrastructure machinery moved safely to the jobsite — permitted and on schedule.",
    points: ["Earthmoving fleets", "Paving & grading rigs", "Infrastructure modules"],
    icon: "excavator",
  },
  {
    title: "Mining & Oilfield Gear",
    body: "High-capacity drills, rigging, and heavy industrial plant assets transported across rough corridors and long hauls.",
    points: ["Drilling rigs", "Frac & pump units", "Plant assets"],
    icon: "drill",
  },
  {
    title: "Industrial Cranes",
    body: "Logistics management for oversized lifting systems and subdimensional components, from breakdown to final placement.",
    points: ["Crawler & boom cranes", "Counterweights", "Subdimensional loads"],
    icon: "crane",
  },
];

export const fleet = [
  {
    title: "Removable Gooseneck (RGN)",
    body: "Drive-on loading for heavy wheeled or tracked machinery, with multi-axle configurations for extreme weight.",
    spec: "Up to 150,000 lbs",
  },
  {
    title: "Lowboys & Drop Decks",
    body: "Lowered deck height to legally move tall and oversized loads under height-restricted corridors.",
    spec: "Tall / oversized loads",
  },
  {
    title: "Standard Flatbeds",
    body: "Conventional industrial freight, steel, and materials hauled with reliable, well-maintained equipment.",
    spec: "48' & 53' decks",
  },
];

export const crossBorder = [
  {
    title: "Freight Forwarding",
    body: "Seamless coordination of cross-border movements between the US, Mexico, and Canada.",
  },
  {
    title: "Customs Support",
    body: "Documentation and compliance handled so your equipment clears the border without delay.",
  },
  {
    title: "Secure Holding Yard",
    body: `Monitored staging and transload yard based in ${company.yard}, right on the border.`,
  },
];

export const steps = [
  { n: "01", title: "Tell us the load", body: "Dimensions, weight, pickup and delivery — we scope it in minutes." },
  { n: "02", title: "We permit & plan", body: "Routing, permits, escorts, and equipment matched to the haul." },
  { n: "03", title: "We move it", body: "Tracked door-to-door with 24/7 dispatch until it's delivered." },
];

export const faqs = [
  {
    q: "What size loads can you move?",
    a: "From standard flatbed freight up to superloads exceeding 150,000 lbs and oversized/subdimensional machinery. If it's heavy, tall, or wide, we route and permit it.",
  },
  {
    q: "Do you handle cross-border shipments?",
    a: "Yes. We coordinate freight forwarding, customs documentation, and staging across the US, Canada, and Mexico, with a secure holding yard in Hidalgo, TX.",
  },
  {
    q: "Are you a licensed carrier?",
    a: `Heavy Iron Logistics operates under Trelzo LLC and is FMCSA authorized under USDOT ${company.usdot} and ${company.mc}.`,
  },
  {
    q: "How fast can I get a quote?",
    a: "Send us the load details and we typically respond same-day. For urgent moves, call dispatch directly.",
  },
];
