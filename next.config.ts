import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AJOUTE CETTE LIGNE : C'est elle qui crée le dossier 'out'
  output: 'export', 
  
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  
  // Optionnel : Si tu déploies dans un sous-dossier (ex: /karibotel/), 
  // décommente la ligne ci-dessous et ajuste le chemin
  // basePath: '/karibotel',
};

export default nextConfig;