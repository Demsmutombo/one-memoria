import memorial from '@/assets/images/templates/memorial/memorial.jpeg'
import wedding from '@/assets/images/templates/mariage/wedding.jpeg'
import wedding2 from '@/assets/images/templates/mariage/wedding2.jpeg'
import wedding3 from '@/assets/images/templates/mariage/wedding3.jpeg'
import anniv from '@/assets/images/templates/anniversaire/anniv.jpeg'
import anniv2 from '@/assets/images/templates/anniversaire/anniv2.jpeg'
import anniv3 from '@/assets/images/templates/anniversaire/anniv3.jpeg'
import anniv4 from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profile3 from '@/assets/images/templates/profil/profile3.jpeg'
import profile4 from '@/assets/images/templates/profil/profile4.jpeg'

export const media = {
  memorial,
  wedding,
  wedding2,
  wedding3,
  anniv,
  anniv2,
  anniv3,
  anniv4,
  profile3,
  profile4
}

const imagesByName = {
  'Green Leaves': memorial,
  'Cherry Blossoms': memorial,
  'White Marble': memorial,
  'Cross Memorial': memorial,
  'Romantic Wedding': wedding,
  'Elegant Union': wedding2,
  'Garden Wedding': wedding3,
  'Premium Anniversary': anniv4,
  'Professional Profile': profile3,
  'Creative Portfolio': profile4,
  'Modern CV': profile3
}

export const categoryImages = {
  memorial,
  mariage: wedding,
  anniversaire: anniv4,
  profil: profile3
}

export function getTemplateImage(templateOrCategory, name) {
  if (typeof templateOrCategory === 'object' && templateOrCategory) {
    return imagesByName[templateOrCategory.name] || categoryImages[templateOrCategory.category] || memorial
  }
  return imagesByName[name] || categoryImages[templateOrCategory] || memorial
}

export const categoryLabels = {
  memorial: 'Mémorial',
  mariage: 'Mariage',
  anniversaire: 'Anniversaire',
  profil: 'Profil'
}

export function getCategoryLabel(category) {
  return categoryLabels[category] || category
}

export function getPlanLabel(plan) {
  const labels = { standard: 'Standard', premium: 'Premium' }
  return labels[plan] || plan
}
