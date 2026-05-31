/**
 * Tarification One Memoria — source unique pour tout le site (UI, FAQ, WhatsApp).
 * Anniversaire & profil : prix fixe.
 * Mémorial & mariage : deux formules — Standard et Premium.
 */

export const FIXED_PRICE_ANNIVERSAIRE_PROFIL = '50$'

/** Montants USD mémorial / mariage */
export const TIER_AMOUNTS_USD = {
  standard: 100,
  premium: 150,
}

const tierLabel = (usd) => `${usd}$`

export const TIER_PRICES = {
  standard: tierLabel(TIER_AMOUNTS_USD.standard),
  premium: tierLabel(TIER_AMOUNTS_USD.premium)
}

export const FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR =
  `Les sites mémorial et de mariage sont proposés en deux formules : Standard (${TIER_PRICES.standard}), Premium (${TIER_PRICES.premium}).`

export const FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR =
  `Ces deux services sont au tarif fixe de ${FIXED_PRICE_ANNIVERSAIRE_PROFIL}.`

export const TIER_PRICES_WHATSAPP_LINE_FR =
  `Mémorial et mariage : Standard ${TIER_PRICES.standard} · Premium ${TIER_PRICES.premium}.`

/** Affichage carte d’accueil / services : point d’entrée mémorial */
export const CATEGORY_CARD_MEMORIAL = {
  label: TIER_PRICES.standard,
  badge: 'Standard'
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
