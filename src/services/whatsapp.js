import {
  FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  TIER_PRICES_WHATSAPP_LINE_FR
} from '@/data/pricing.js'
import { whatsappUrl } from '@/data/contact.js'

const openWhatsApp = (message) => {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
}

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

  openWhatsApp(message)
}

export const sendGeneralWhatsApp = () => {
  const message = `Bonjour One Memoria,

Je souhaite créer un site web personnalisé.

Sites d'anniversaire et profils personnels : tarif fixe ${FIXED_PRICE_ANNIVERSAIRE_PROFIL}.
${TIER_PRICES_WHATSAPP_LINE_FR}

Pouvez-vous m'indiquer les options disponibles ?`

  openWhatsApp(message)
}

export const sendCreateSpaceWhatsApp = () => {
  const message = `Bonjour One Memoria,

Je souhaite créer mon espace numérique personnalisé.

Pouvez-vous m'accompagner pour démarrer ?`

  openWhatsApp(message)
}

export const sendServiceWhatsApp = (serviceName) => {
  const message = `Bonjour One Memoria,

Je souhaite créer un espace : ${serviceName}.

Pouvez-vous m'indiquer les options disponibles ?`

  openWhatsApp(message)
}

export const sendPlanWhatsApp = (plan, price) => {
  const message = `Bonjour One Memoria,

Je suis intéressé(e) par la formule "${plan}" (${price}).

Pouvez-vous me donner plus d'informations ?`

  openWhatsApp(message)
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

  openWhatsApp(message)
}
