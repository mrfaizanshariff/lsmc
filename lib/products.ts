export interface VariantType {
  id: string;
  name: string;
  image: string;
}

export interface SpecificationType {
  name: string;
  value: string;
}

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: 'indoor' | 'outdoor' | 'fixtures' | 'equipment';
  variants?: VariantType[];
  specifications: SpecificationType[];
  features: string[];
  new?: boolean;
  featured?: boolean;
}

import img1 from '../public/assets/1.jpeg';
import img8 from '../public/assets/8.jpeg';
import img7 from '../public/assets/7.jpeg';
import img10 from '../public/assets/10.jpeg';
import img11 from '../public/assets/11.jpeg';
import c1 from '../public/assets/product-images/c1.jpeg'
import c2 from '../public/assets/product-images/c2.jpeg'
import c3 from '../public/assets/product-images/c3.jpeg'
import c4 from '../public/assets/product-images/c4.jpeg'
import p1 from '../public/assets/product-images/p1.jpeg'
import p2 from '../public/assets/product-images/p2.jpeg'
import s1 from '../public/assets/product-images/s1.jpeg'
import s2 from '../public/assets/product-images/s2.jpeg'
import s3 from '../public/assets/product-images/s3.jpeg'
import l1 from '../public/assets/product-images/l1.jpeg'
import l2 from '../public/assets/product-images/l2.jpeg'
import l3 from '../public/assets/product-images/l3.jpeg'
import f1 from '../public/assets/product-images/f1.jpeg'
import f2 from '../public/assets/product-images/f2.jpeg'
import f3 from '../public/assets/product-images/f3.jpeg'
import t1 from '../public/assets/product-images/t1.jpeg'
import t2 from '../public/assets/product-images/t2.jpeg'
import t3 from '../public/assets/product-images/t3.jpeg'
import t4 from '../public/assets/product-images/t4.jpeg'
import m1 from '../public/assets/product-images/m1.jpeg'
import m2 from '../public/assets/product-images/m2.jpeg'
export const products: ProductType[] = [
  {
    id: '1',
    name: 'Celestial Pendant Light',
    slug: 'celestial-pendant-light',
    description: 'Elegant pendant light with adjustable height and warm ambient glow, perfect for dining areas and living rooms.',
    image: c4.src,
    category: 'indoor',
    variants: [
      {
        id: '1-1',
        name: 'Brass',
        image: c2.src
      },
      {
        id: '1-2',
        name: 'Matte Black',
        image: c3.src
      },
      {
        id: '1-3',
        name: 'Brushed Nickel',
        image: c1.src
      }
    ],
    specifications: [
      { name: 'Dimensions', value: '30cm diameter x 45cm height' },
      { name: 'Material', value: 'Aluminum, Glass' },
      { name: 'Bulb Type', value: 'E27, max 60W' },
      { name: 'IP Rating', value: 'IP20' },
      { name: 'Adjustable', value: 'Yes, cable length' }
    ],
    features: [
      'Hand-finished metal shade with premium coating',
      'Adjustable suspension cable up to 150cm',
      'Dimmable with compatible systems',
      'Energy-efficient LED compatible',
      'Suitable for sloped ceilings',
      'Minimalist design complements any interior'
    ],
    new: true,
    featured: true
  },
  {
    id: '2',
    name: 'Horizon Pathway Lights',
    slug: 'horizon-pathway-lights',
    description: 'Weather-resistant pathway lights with solar charging capabilities, illuminating outdoor paths with a soft, directed glow.',
    image: img7.src,
    category: 'outdoor',
    variants: [
      {
        id: '2-1',
        name: 'Solar Powered',
        image: p1.src
      },
      {
        id: '2-2',
        name: 'Wired 12V',
        image: p2.src
      }
    ],
    specifications: [
      { name: 'Dimensions', value: '45cm height x 15cm width' },
      { name: 'Material', value: 'Aluminum, Tempered Glass' },
      { name: 'Power Source', value: 'Solar/12V AC' },
      { name: 'IP Rating', value: 'IP65' },
      { name: 'Brightness', value: '380 lumens' }
    ],
    features: [
      'Weather-resistant construction for extreme conditions',
      'Integrated solar panel with backup battery',
      'Automatic dusk-to-dawn operation',
      'Easy installation with ground stakes included',
      'Uniform light distribution for safety',
      '5-year warranty against corrosion'
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Aurora Recessed Spotlight',
    slug: 'aurora-recessed-spotlight',
    description: 'High-efficiency recessed LED spotlight with adjustable beam angle, suitable for retail and gallery lighting.',
    image: s1.src,
    category: 'fixtures',
    variants: [
      {
        id: '3-1',
        name: 'White',
        image: s2.src
      },
      {
        id: '3-2',
        name: 'Brushed Silver',
        image: s3.src
      },
      {
        id: '3-3',
        name: 'Black',
        image: s1.src
      }
    ],
    specifications: [
      { name: 'Dimensions', value: '10cm diameter x 8cm depth' },
      { name: 'Power Consumption', value: '7W' },
      { name: 'Beam Angle', value: 'Adjustable 15-45°' },
      { name: 'Color Temperature', value: '3000K/4000K/5000K' },
      { name: 'Dimmable', value: 'Yes, TRIAC/0-10V/DALI' }
    ],
    features: [
      'Precision die-cast aluminum heat sink',
      'Adjustable tilt up to 30 degrees',
      'Anti-glare honeycomb louver option',
      'CRI>95 for accurate color rendering',
      'Flicker-free driver for comfortable viewing',
      'Tool-free installation system'
    ],
    new: true
  },
  {
    id: '4',
    name: 'Nova LED Strip System',
    slug: 'nova-led-strip-system',
    description: 'Flexible LED strip system for cove lighting, under-cabinet applications, and architectural accents with RGBW capabilities.',
    image: img1.src,
    category: 'indoor',
    variants: [
      {
        id: '4-1',
        name: 'Warm White (2700K)',
        image: l1.src
      },
      {
        id: '4-2',
        name: 'RGBW',
        image: l2.src
      },
      {
        id: '4-3',
        name: 'Tunable White',
        image: l3.src
      }
    ],
    specifications: [
      { name: 'Dimensions', value: '5m roll, 10mm width' },
      { name: 'Power', value: '14.4W/m' },
      { name: 'LED Density', value: '120 LEDs/m' },
      { name: 'IP Rating', value: 'IP20/IP65/IP68 options' },
      { name: 'Control', value: 'Bluetooth/WiFi/DMX compatible' }
    ],
    features: [
      'High-density 120 LEDs per meter for smooth light lines',
      'Silicon extrusion diffuser for no visible hotspots',
      'Cuttable every 5cm for custom installations',
      'Aluminum channels with various mounting options',
      'Smart home integration capability',
      'Self-adhesive 3M backing for easy installation'
    ],
    featured: true
  },
  {
    id: '5',
    name: 'Zenith Floodlight Pro',
    slug: 'zenith-floodlight-pro',
    description: 'Heavy-duty flood lighting solution for sports facilities, parking lots, and architectural façades with precision optics.',
    image: f1.src,
    category: 'outdoor',
    variants: [
      {
        id: '5-1',
        name: '150W',
        image: f2.src
      },
      {
        id: '5-2',
        name: '300W',
        image: f3.src
      },
      {
        id: '5-3',
        name: '500W',
        image: f1.src
      }
    ],
    specifications: [
      { name: 'Dimensions', value: '380 x 290 x 70mm' },
      { name: 'Material', value: 'Die-cast aluminum' },
      { name: 'Lumens', value: 'Up to 65,000lm' },
      { name: 'Beam Angles', value: '15°/30°/60°/90°/Asymmetric' },
      { name: 'Operating Temperature', value: '-40°C to +55°C' }
    ],
    features: [
      'Advanced thermal management system for extended lifespan',
      'Precision PMMA lenses for optimal light distribution',
      'Tool-less maintenance design for quick servicing',
      'Anti-corrosion coating for coastal environments',
      'Surge protection up to 10kV',
      'Optional motion sensing and dimming capabilities'
    ]
  },
  {
    id: '6',
    name: 'Lumina Track Light System',
    slug: 'lumina-track-light-system',
    description: 'Versatile track lighting system for retail, galleries, and museums with interchangeable light heads and accessories.',
    image: t1.src,
    category: 'fixtures',
    variants: [
      {
        id: '6-1',
        name: 'Spot Head',
        image: t2.src
      },
      {
        id: '6-2',
        name: 'Wall Wash Head',
        image: t3.src
      },
      {
        id: '6-3',
        name: 'Pendant Adapter',
        image:t4.src
      }
    ],
    specifications: [
      { name: 'Track Dimensions', value: '2m/3m/4m lengths, 32mm width' },
      { name: 'Power', value: '48V DC system' },
      { name: 'Capacity', value: 'Up to 20 fixtures per circuit' },
      { name: 'Fixture Wattage', value: '7W/12W/18W options' },
      { name: 'Control', value: 'Phase-dim/DALI/Bluetooth' }
    ],
    features: [
      'Magnetic attachment system for tool-free fixture placement',
      'Continuous-run connectors for custom layouts',
      'Integrated driver eliminates external boxes',
      'Snap-on accessories (barn doors, honeycomb, filters)',
      'Live-load capability for fixture changes while powered',
      'Surface, recessed, and suspended mounting options'
    ],
    featured: true
  },
  {
    id: '7',
    name: 'Production Equipment',
    slug: 'production-equipment',
    description: 'Precision-engineered outdoor spotlight designed for high-volume manufacturing. Features a durable stake mount suitable for automated assembly lines.',
    image: img11.src,
    category: 'equipment',
    variants: [
      {
        id: '7-1',
        name: 'Bronze',
        image: m1.src
      },
      {
        id: '7-2',
        name: 'Verde Green',
        image: m2.src
      }
    ],
    specifications: [
      { name: 'Track Dimensions', value: '2m/3m/4m lengths, 32mm width' },
      { name: 'Power', value: '48V DC system' },
      { name: 'Capacity', value: 'Up to 20 fixtures per circuit' },
      { name: 'Fixture Wattage', value: '7W/12W/18W options' },
      { name: 'Control', value: 'Phase-dim/DALI/Bluetooth' }
    ],
    features: [
      'Magnetic attachment system for tool-free fixture placement',
      'Continuous-run connectors for custom layouts',
      'Integrated driver eliminates external boxes',
      'Snap-on accessories (barn doors, honeycomb, filters)',
      'Live-load capability for fixture changes while powered',
      'Surface, recessed, and suspended mounting options'
    ],
    featured:true
  }
]