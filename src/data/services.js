import { CATEGORY_CARD_MEMORIAL, CATEGORY_CARD_MARIAGE, FIXED_CARD } from '@/data/pricing.js'

export const activities = [
  {
    key: 'memorial',
    title: 'Mémorial',
    kicker: 'Hommage',
    description:
      'Créer un espace numérique dédié à la mémoire d’une personne — biographie, galerie et livre d’or, avec dignité.',
    href: '/templates?category=memorial',
    category: 'memorial',
    price: CATEGORY_CARD_MEMORIAL,
    features: ['Biographie complète', 'Galerie photos', 'Livre d’or', 'Timeline']
  },
  {
    key: 'mariage',
    title: 'Mariage',
    kicker: 'Célébration',
    description:
      'Transformer les souvenirs du mariage en un album numérique vivant, élégant et partageable.',
    href: '/templates?category=mariage',
    category: 'mariage',
    price: { ...CATEGORY_CARD_MARIAGE, highlight: 'Recommandé' },
    features: ['Histoire d’amour', 'Galerie photos', 'RSVP', 'Liste de cadeaux']
  },
  {
    key: 'anniversaire',
    title: 'Anniversaire',
    kicker: 'Célébration',
    description:
      'Créer une expérience personnalisée pour célébrer une personne et ses moments importants.',
    href: '/templates?category=anniversaire',
    category: 'anniversaire',
    price: FIXED_CARD,
    features: ['Timeline', 'Messages', 'Galerie', 'Design personnalisé']
  },
  {
    key: 'profil',
    title: 'Profil personnel',
    kicker: 'Présence',
    description:
      'Créer une présence numérique moderne et personnalisée — portfolio, parcours et contact.',
    href: '/templates?category=profil',
    category: 'profil',
    price: FIXED_CARD,
    features: ['Portfolio', 'CV interactif', 'Contact', 'Réseaux sociaux']
  },
  {
    key: 'fondation',
    title: 'Fondation / Association',
    kicker: 'Héritage',
    description:
      'Créer un espace numérique pour présenter une organisation, son histoire, ses actions et son héritage.',
    href: '/contact',
    category: null,
    price: null,
    features: ['Histoire', 'Actions', 'Galerie', 'Contact']
  }
]
