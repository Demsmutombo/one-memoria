import {
  FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  TIER_PRICES_WHATSAPP_LINE_FR
} from '@/data/pricing.js'

export const sendToWhatsApp = (template) => {
  const planLine =
    template.isFixedPrice || !template.plan
      ? `Prix : ${template.priceRange} (tarif fixe)`
      : `Formule : ${template.plan}
Prix : ${template.priceRange}`

  const message = `Bonjour One Memoria,

Je souhaite créer un site.

Type : ${template.category}
Template : ${template.name}
${planLine}
Lien démo : ${template.demoUrl}

Pouvez-vous m'aider avec ce projet ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}

export const sendGeneralWhatsApp = () => {
  const message = `Bonjour One Memoria,

Je souhaite créer un site web personnalisé.

Sites d'anniversaire et profils personnels : tarif fixe ${FIXED_PRICE_ANNIVERSAIRE_PROFIL}.
${TIER_PRICES_WHATSAPP_LINE_FR}

Pouvez-vous m'indiquer les options disponibles ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}

export const sendContactWhatsApp = (formData) => {
  const message = `Bonjour One Memoria,

Je vous contacte pour :
${formData.subject}

Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone || 'Non spécifié'}

Message :
${formData.message}`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}
