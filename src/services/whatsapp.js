export const sendToWhatsApp = (template) => {
  const message = `Bonjour One Memoria,

Je souhaite créer un site.

Type : ${template.category}
Template : ${template.name}
Formule : ${template.plan}
Prix : ${template.priceRange}
Lien démo : ${template.demoUrl}

Pouvez-vous m'aider avec ce projet ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}

export const sendGeneralWhatsApp = () => {
  const message = `Bonjour One Memoria,

Je souhaite créer un site web personnalisé.

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
