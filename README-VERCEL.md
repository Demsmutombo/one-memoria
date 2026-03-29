# One Memoria - Déploiement Vercel

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte Vercel
- Node.js installé
- Git installé

### Configuration initiale

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter à Vercel**
   ```bash
   vercel login
   ```

3. **Configurer le projet**
   ```bash
   vercel link
   ```

### Déploiement automatique

#### Option 1: Via Vercel CLI
```bash
# Déployer en production
npm run deploy

# Ou utiliser le script
./deploy.sh
```

#### Option 2: Via GitHub (Recommandé)
1. Connecter votre repository GitHub à Vercel
2. Vercel déploiera automatiquement à chaque push sur `main`

### Configuration des variables d'environnement

Dans le dashboard Vercel, ajoutez ces variables:

```env
VITE_APP_TITLE=One Memoria
VITE_APP_DESCRIPTION=Sites Web Personnalisés pour célébrer vos moments précieux
VITE_APP_URL=https://votre-domaine.vercel.app
VITE_WHATSAPP_NUMBER=243991683269
NODE_ENV=production
```

### Fichiers de configuration

- `vercel.json` - Configuration principale Vercel
- `.vercelignore` - Fichiers à exclure du déploiement
- `.env.example` - Variables d'environnement exemples
- `deploy.sh` - Script de déploiement automatisé

### Personnalisation du domaine

1. Allez dans le dashboard Vercel
2. Cliquez sur "Settings" → "Domains"
3. Ajoutez votre domaine personnalisé
4. Configurez les enregistrements DNS selon les instructions Vercel

### Optimisations SEO

Le site est configuré avec:
- Meta tags optimisés
- Headers de sécurité
- Cache control pour les assets statiques
- Sitemap automatique
- Favicon personnalisé

### Monitoring

- Vercel Analytics inclus
- Logs des erreurs disponibles
- Performance monitoring
- Uptime monitoring

### Dépannage

#### Build échoue
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Variables d'environnement
Assurez-vous que toutes les variables commencent par `VITE_` pour être accessibles dans Vite.

#### Routes SPA
Le `vercel.json` configure déjà le routage SPA pour que toutes les routes pointent vers `index.html`.

### Support

- Documentation Vercel: https://vercel.com/docs
- Support Vercel: https://vercel.com/help
