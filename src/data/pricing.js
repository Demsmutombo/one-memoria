/**
 * Tarification One Memoria — source unique pour tout le site (UI, FAQ, WhatsApp).
 * Anniversaire & profil : prix fixe, sans formule Essentiel / Standard / Premium.
 * Mémorial & mariage : trois paliers (affichage = montant seul, ex. 100$).
 */

export const FIXED_PRICE_ANNIVERSAIRE_PROFIL = '50$'

/** Montants USD par palier mémorial / mariage (chiffres utilisés partout) */
export const TIER_AMOUNTS_USD = {
  essentiel: 100,
  standard: 150,
  premium: 200,
}

const tierLabel = (usd) => `${usd}$`

export const TIER_PRICES = {
  essentiel: tierLabel(TIER_AMOUNTS_USD.essentiel),
  standard: tierLabel(TIER_AMOUNTS_USD.standard),
  premium: tierLabel(TIER_AMOUNTS_USD.premium)
}

/** Réponse FAQ / texte court : paliers mémorial & mariage */
export const FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR =
  `Les sites mémorial et de mariage sont proposés en trois formules : Essentiel (${TIER_PRICES.essentiel}), Standard (${TIER_PRICES.standard}), Premium (${TIER_PRICES.premium}).`

/** Anniversaire & profil — même formulation partout (évite « 50$ » en dur) */
export const FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR =
  `Ces deux services sont au tarif fixe de ${FIXED_PRICE_ANNIVERSAIRE_PROFIL}.`

/** Fragment pour messages (ex. WhatsApp) */
export const TIER_PRICES_WHATSAPP_LINE_FR =
  `Mémorial et mariage : ${TIER_PRICES.essentiel} · ${TIER_PRICES.standard} · ${TIER_PRICES.premium}.`

/** Affichage carte d’accueil / services : point d’entrée mémorial */
export const CATEGORY_CARD_MEMORIAL = {
  label: TIER_PRICES.essentiel,
  badge: 'Essentiel'
}

/** Mariage : mettre en avant Standard (recommandé) */
export const CATEGORY_CARD_MARIAGE = {
  label: TIER_PRICES.standard,
  badge: 'Standard',
  badgeVariant: 'gold'
}

export const FIXED_CARD = {
  label: FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  badge: 'Prix fixe'
}
