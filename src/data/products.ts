export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  gallery?: string[];
  description: string;
  longDescription?: string;
  scent?: string;
  weight?: string;
  ingredients?: string;
  inStock: boolean;
  isPersonalisable?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  tags?: string[];
}

export const products: Product[] = [
  {
    slug: 'gouden-lavendel-zeep-roosjes',
    name: 'Gouden Lavendel zeep "Roosjes"',
    brand: 'Natural ByRoos',
    category: 'Gepersonaliseerd',
    price: 4.50,
    image: '/images/personalised-soap-real.jpg',
    gallery: ['/images/personalised-soap-real.jpg', '/images/ambachtelijke-zeep.jpg', '/images/shop-display.jpg'],
    description: 'Handgegoten lavendelzeep met gouden roosjes. Op maat te maken met jouw naam, datum of korte boodschap.',
    longDescription: 'Onze signature zeep — gemaakt met biologische sheabutter, lavendelolie en een gouden mica-shimmer. Elke zeep wordt met de hand gegoten in mijn atelier in Grijpskerke. Ideaal als trouwbedankje, jubileumcadeau of voor een persoonlijke gelegenheid.',
    scent: 'Lavendel & Roos',
    weight: '90 gram',
    ingredients: 'Sodium Olivate, Sodium Cocoate, Aqua, Glycerin, Lavandula Angustifolia Oil, Mica',
    inStock: true,
    isPersonalisable: true,
    isBestseller: true,
    tags: ['Bruiloft', 'Cadeau', 'Vegan'],
  },
  {
    slug: 'ambachtelijke-zeep-naturel',
    name: 'Ambachtelijke zeep — Naturel',
    brand: 'Natural ByRoos',
    category: 'Zeep',
    price: 6.50,
    image: '/images/ambachtelijke-zeep.jpg',
    description: 'Handgemaakte zeep zonder toevoegingen. Mild voor gevoelige huid.',
    longDescription: 'Pure ambachtelijke zeep, koudgegoten en minimaal 6 weken gerijpt. Geen parfum, geen synthetische ingrediënten — alleen wat de huid nodig heeft.',
    weight: '100 gram',
    inStock: true,
    isPersonalisable: false,
    tags: ['Vegan', 'Gevoelige huid'],
  },
  {
    slug: 'blue-berry-conditioner',
    name: 'Blue Berry conditioner',
    brand: 'Loveli',
    category: 'Haarverzorging',
    price: 9.95,
    image: '/images/soap-1.jpg',
    description: 'Verzorgende conditioner bar met blauwe bes — 60 wassingen.',
    weight: '60 gram',
    inStock: true,
    tags: ['Vegan', 'Plastic-vrij'],
  },
  {
    slug: 'kokos-conditioner-bar',
    name: 'Kokos conditioner bar',
    brand: 'Loveli',
    category: 'Haarverzorging',
    price: 9.95,
    image: '/images/soap-2.jpg',
    description: 'Voedende kokos conditioner — perfect voor droog haar.',
    weight: '60 gram',
    inStock: true,
    tags: ['Vegan', 'Plastic-vrij'],
  },
  {
    slug: 'mango-conditioner',
    name: 'Mango conditioner',
    brand: 'Loveli',
    category: 'Haarverzorging',
    price: 9.95,
    image: '/images/soap-3.jpg',
    description: 'Tropische mango conditioner voor zacht en glanzend haar.',
    weight: '60 gram',
    inStock: true,
    tags: ['Vegan'],
  },
  {
    slug: 'naturel-conditioner',
    name: 'Naturel conditioner',
    brand: 'Loveli',
    category: 'Haarverzorging',
    price: 9.95,
    image: '/images/soap-4.jpg',
    description: 'Geurloze conditioner voor de gevoelige hoofdhuid.',
    weight: '60 gram',
    inStock: true,
    tags: ['Vegan', 'Geurloos'],
  },
  {
    slug: 'rescue-balm',
    name: 'Rescue Balm',
    brand: 'Loveli',
    category: 'Lichaamsverzorging',
    price: 9.50,
    image: '/images/rescue-balm.jpg',
    description: 'Verzorgende balm voor droge plekken, lippen en handen.',
    weight: '10 ml',
    inStock: true,
    isNew: true,
    tags: ['Multifunctioneel'],
  },
  {
    slug: 'body-cream-rice-flower',
    name: 'Body Cream Rice Flower',
    brand: 'Loveli',
    category: 'Lichaamsverzorging',
    price: 15.00,
    image: '/images/body-cream-rice.jpg',
    description: 'Hydraterende bodycrème met rice flower — zacht zoete geur.',
    scent: 'Rice Flower',
    weight: '200 ml',
    inStock: true,
    tags: ['Vegan'],
  },
  {
    slug: 'body-cream-sunny-orange',
    name: 'Body Cream Sunny Orange',
    brand: 'Loveli',
    category: 'Lichaamsverzorging',
    price: 15.00,
    image: '/images/body-cream-orange.jpg',
    description: 'Verfrissende bodycrème met sinaasappel — energiek begin van de dag.',
    scent: 'Sunny Orange',
    weight: '200 ml',
    inStock: true,
    tags: ['Vegan'],
  },
  {
    slug: 'giftset-natural-byroos',
    name: 'Giftset Natural ByRoos',
    brand: 'Natural ByRoos',
    category: 'Cadeaus',
    price: 24.95,
    image: '/images/giftset.jpg',
    description: 'Samengestelde cadeauset met onze favorieten. Mooi verpakt.',
    longDescription: 'Een zorgvuldig samengestelde set met onze meest geliefde producten — handgemaakte zeep, een conditioner bar en een rescue balm. Verpakt in herbruikbare doos met droogbloemen en een handgeschreven kaartje.',
    inStock: true,
    isPersonalisable: true,
    isBestseller: true,
    tags: ['Cadeau', 'Bruiloft'],
  },
  {
    slug: 'cadeaubon',
    name: 'Cadeaubon Natural ByRoos',
    brand: 'Natural ByRoos',
    category: 'Cadeaus',
    price: 25.00,
    image: '/images/cadeaubonnen.jpg',
    description: 'Geef de keuze cadeau. Cadeaubon van €25, €50 of €100.',
    inStock: true,
    tags: ['Cadeau'],
  },
  {
    slug: 'badzout-zakje-personalised',
    name: 'Badzout zakje — Op maat',
    brand: 'Natural ByRoos',
    category: 'Gepersonaliseerd',
    price: 3.50,
    image: '/images/product-display-1.jpg',
    description: 'Verzorgend badzout in een zakje met persoonlijk label. Ideaal als bedankje.',
    longDescription: 'Handgevuld met Himalaya-zout, magnesium en gedroogde rozenblaadjes. Het label drukken we met jouw naam, logo of korte tekst. Vanaf 10 stuks bestelbaar.',
    scent: 'Roos & Magnesium',
    weight: '50 gram',
    inStock: true,
    isPersonalisable: true,
    isNew: true,
    tags: ['Wellness', 'Bedankje', 'B2B'],
  },
];

export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const getProducts = () => products;
export const getProductsByCategory = (cat: string) => products.filter(p => p.category === cat);
export const getRelatedProducts = (slug: string, limit = 4) => {
  const current = getProduct(slug);
  if (!current) return [];
  return products
    .filter(p => p.slug !== slug && (p.category === current.category || p.brand === current.brand))
    .slice(0, limit);
};

export const categories = [
  { slug: 'alle', label: 'Alle producten' },
  { slug: 'gepersonaliseerd', label: 'Gepersonaliseerd' },
  { slug: 'zeep', label: 'Zeep' },
  { slug: 'haarverzorging', label: 'Haarverzorging' },
  { slug: 'lichaamsverzorging', label: 'Lichaamsverzorging' },
  { slug: 'cadeaus', label: 'Cadeaus' },
];

export const brands = ['Natural ByRoos', 'Loveli', 'Beesha', 'Cosmeau', 'Bamboozy', 'Ben&Anna'];
