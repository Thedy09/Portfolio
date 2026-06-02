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

## Publier sur GitHub (sans co-auteur Cursor)

Repo GitHub : **https://github.com/Thedy09/Portfolio**

```bash
cd /home/thedy/Projects/thedy-freelance-portfolio
git push -u origin main
```

Un hook `commit-msg` retire automatiquement toute ligne `Co-authored-by: Cursor`.

## Déployer sur Vercel

1. [vercel.com/new](https://vercel.com/new) → Import `Thedy09/Portfolio`
2. Framework : **Other** · Build / Output : **vides**
3. Deploy

Lien direct : https://vercel.com/new/clone?repository-url=https://github.com/Thedy09/Portfolio
