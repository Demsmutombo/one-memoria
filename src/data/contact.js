/**
 * Coordonnées officielles One Memoria — source unique (UI, SEO, WhatsApp).
 * Ne pas inventer de numéro, e-mail ou réseau social ici.
 */
export const CONTACT = {
  email: 'onememoria@gmail.com',
  whatsappNumber: '243991683269',
  whatsappDisplay: '+243 991 683 269',
  phoneNumber: '243893002461',
  phoneDisplay: '0893 002 461',
  siteUrl: 'https://www.onememoria.com',
  siteLabel: 'www.onememoria.com',
  hours: {
    weekdays: 'Lundi au Vendredi',
    weekdaysTime: '9h - 17h (GMT+1)',
    saturday: 'Samedi',
    saturdayTime: '10h - 14h',
    sunday: 'Dimanche',
    sundayTime: 'Fermé'
  }
}

export const mailtoHref = (subject = 'Projet One Memoria') =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`

export const telHref = `tel:+${CONTACT.phoneNumber}`

export const whatsappUrl = (text) => {
  const encoded = encodeURIComponent(text)
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`
}
