import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* On utilise 'standalone' au lieu de 'export'. 
     Cela crée un dossier optimisé avec toutes les dépendances nécessaires 
     pour tourner sur le serveur Node.js de cPanel.
  */
  output: 'standalone', 

  images: {
    remotePatterns: [],
    unoptimized: true, // Garde ceci à true pour éviter des problèmes de bibliothèques d'images manquantes sur le serveur
  },

  // Optimisations pour la production
  compress: true,
  poweredByHeader: false,

  /* Si ton site est accessible directement via karibotel.aris-cc.com, 
     tu n'as pas besoin de basePath. 
  */
};

export default nextConfig;