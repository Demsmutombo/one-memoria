import { FIXED_PRICE_ANNIVERSAIRE_PROFIL, TIER_PRICES } from '@/data/pricing.js'

export const templates = [
  // Templates Memorial
  {
    id: 1,
    name: 'Golden Celebration',
    slug: 'golden-celebration',
    category: 'memorial',
    plan: 'essentiel',
    isFixedPrice: false,
    priceRange: TIER_PRICES.essentiel,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://offres-essentiel.vercel.app/',
    description: 'Design élégant avec touches dorées pour un hommage respectueux.',
    features: ['Biographie', 'Galerie photos', 'Hommage', 'Informations cérémonie'],
    deliveryTime: '2 jours'
  },
  {
    id: 2,
    name: 'Green Leaves',
    slug: 'green-leaves',
    category: 'memorial',
    plan: 'standard',
    isFixedPrice: false,
    priceRange: TIER_PRICES.standard,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://offre-standard.vercel.app/',
    description: 'Design naturel apaisant avec feuillages verts et ambiance sereine.',
    features: ['Biographie complète', 'Galerie illimitée', 'Témoignages', 'Timeline', "Livre d'or"],
    deliveryTime: '2 jours'
  },
  {
    id: 3,
    name: 'Cherry Blossoms',
    slug: 'cherry-blossoms',
    category: 'memorial',
    plan: 'premium',
    isFixedPrice: false,
    priceRange: TIER_PRICES.premium,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://offre-premium.vercel.app/',
    description: 'Design délicat avec fleurs de cerisier, animations douces et personnalisation complète.',
    features: ['Design personnalisé', 'Galerie vidéo', 'Animations', 'Domaine personnalisé', 'Support premium'],
    deliveryTime: '2 jours'
  },
  {
    id: 4,
    name: 'White Marble',
    slug: 'white-marble',
    category: 'memorial',
    plan: 'standard',
    isFixedPrice: false,
    priceRange: TIER_PRICES.standard,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://funeraille-tamp2-standard.vercel.app/',
    description: 'Design sophistiqué avec effet marbre blanc et accents dorés.',
    features: ['Biographie', 'Galerie photos', 'Hommage', 'Timeline', "Livre d'or"],
    deliveryTime: '2 jours'
  },
  {
    id: 5,
    name: 'Nature Serenity',
    slug: 'nature-serenity',
    category: 'memorial',
    plan: 'essentiel',
    isFixedPrice: false,
    priceRange: TIER_PRICES.essentiel,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://funeraille-tamp2-essentiel.vercel.app/',
    description: 'Design naturel avec feuillages verts pour une ambiance apaisante.',
    features: ['Biographie', 'Galerie', 'Hommage', 'Informations cérémonie'],
    deliveryTime: '2 jours'
  },
  {
    id: 6,
    name: 'Cross Memorial',
    slug: 'cross-memorial',
    category: 'memorial',
    plan: 'premium',
    isFixedPrice: false,
    priceRange: TIER_PRICES.premium,
    image: '/images/templates/memorial/memorial.jpeg',
    demoUrl: 'https://funeraille-tamp2-premium.vercel.app/',
    description: 'Design spirituel avec coucher de soleil et symbole de croix.',
    features: ['Design personnalisé', 'Galerie vidéo', 'Animations', 'Domaine personnalisé', 'Support premium'],
    deliveryTime: '2 jours'
  },

  // Templates Mariage
  {
    id: 7,
    name: 'Romantic Wedding',
    slug: 'romantic-wedding',
    category: 'mariage',
    plan: 'standard',
    isFixedPrice: false,
    priceRange: TIER_PRICES.standard,
    image: '/images/templates/mariage/wedding.jpeg',
    demoUrl: 'https://jean-shekinah.onememoria.com/',
    description: "Design romantique élégant pour célébrer votre amour.",
    features: ["Histoire d'amour", 'Galerie photos', 'Infos cérémonie', 'RSVP', 'Liste de cadeaux'],
    deliveryTime: '2 jours'
  },
  {
    id: 8,
    name: 'Elegant Union',
    slug: 'elegant-union',
    category: 'mariage',
    plan: 'premium',
    isFixedPrice: false,
    priceRange: TIER_PRICES.premium,
    image: '/images/templates/mariage/wedding2.jpeg',
    demoUrl: 'https://jean-shekinah.onememoria.com/',
    description: 'Design haut de gamme avec animations sophistiquées et personnalisation complète.',
    features: ['Design sur mesure', 'Galerie vidéo', 'Animations', 'Domaine personnalisé', 'Support VIP'],
    deliveryTime: '2 jours'
  },
  {
    id: 9,
    name: 'Garden Wedding',
    slug: 'garden-wedding',
    category: 'mariage',
    plan: 'essentiel',
    isFixedPrice: false,
    priceRange: TIER_PRICES.essentiel,
    image: '/images/templates/mariage/wedding3.jpeg',
    demoUrl: 'https://jean-shekinah.onememoria.com/',
    description: 'Design champêtre avec éléments floraux et ambiance naturelle.',
    features: ['Histoire', 'Galerie', 'Infos cérémonie', 'RSVP'],
    deliveryTime: '2 jours'
  },

  // Templates Anniversaire
  {
    id: 10,
    name: 'Premium Anniversary',
    slug: 'premium-anniversary',
    category: 'anniversaire',
    plan: null,
    isFixedPrice: true,
    priceRange: FIXED_PRICE_ANNIVERSAIRE_PROFIL,
    image: '/images/templates/anniversaire/anniv4.jpeg',
    demoUrl: 'https://nellykuntwakibambe.vercel.app',
    description: 'Design personnalisé pour célébrations mémorables.',
    features: ['Illimité', 'Animations', 'Custom design', 'Galerie vidéo', 'Domaine personnalisé'],
    deliveryTime: '2 jours'
  },

  // Templates Profil
  {
    id: 13,
    name: 'Professional Profile',
    slug: 'professional-profile',
    category: 'profil',
    plan: null,
    isFixedPrice: true,
    priceRange: FIXED_PRICE_ANNIVERSAIRE_PROFIL,
    image: '/images/templates/profil/profile3.jpeg',
    demoUrl: 'https://papyfernand.vercel.app/',
    description: 'Design professionnel pour portfolio et présence en ligne.',
    features: ['Portfolio', 'CV interactif', 'Contact', 'Réseaux sociaux', 'Témoignages'],
    deliveryTime: '2 jours'
  }
]

export const getTemplatesByCategory = (category) => {
  return templates.filter((template) => template.category === category)
}

export const getTemplateBySlug = (slug) => {
  return templates.find((template) => template.slug === slug)
}

export const getTemplatesByPlan = (plan) => {
  return templates.filter((template) => template.plan === plan)
}
