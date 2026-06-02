# Thedy — Portfolio Freelance

Site statique orienté **conversion freelance** : services, réalisations GitHub, processus, FAQ et contact.

## Lancer en local

```bash
cd /home/thedy/Projects/thedy-freelance-portfolio
python3 -m http.server 8080
```

Ouvrir http://localhost:8080

## À personnaliser

1. Ajouter Calendly / Tally dans le bouton « Réserver un appel » si besoin
2. Déployer sur Vercel, Netlify ou GitHub Pages

## Déploiement GitHub Pages

```bash
git add .
git commit -m "Add freelance portfolio"
git remote add origin git@github.com:Thedy09/thedy-freelance-portfolio.git
git push -u origin main
```

Puis activer Pages sur la branche `main` / dossier racine.
