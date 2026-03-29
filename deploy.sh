#!/bin/bash

# Script de déploiement pour One Memoria sur Vercel

echo "🚀 Déploiement de One Memoria sur Vercel..."

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI n'est pas installé. Installation en cours..."
    npm install -g vercel
fi

# Nettoyer le build précédent
echo "🧹 Nettoyage du build précédent..."
rm -rf dist build .output

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Build du projet
echo "🔨 Build du projet..."
npm run build

# Vérifier si le build a réussi
if [ ! -d "dist" ]; then
    echo "❌ Le build a échoué. Le dossier dist n'existe pas."
    exit 1
fi

echo "✅ Build réussi!"

# Déploiement sur Vercel
echo "🌍 Déploiement sur Vercel..."
vercel --prod

echo "🎉 Déploiement terminé!"
echo "📝 N'oubliez pas de configurer votre domaine personnalisé dans le dashboard Vercel"
echo "🔧 N'oubliez pas de configurer les variables d'environnement dans Vercel"
