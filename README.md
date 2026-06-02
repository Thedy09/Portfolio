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

1. Créer le repo vide sur GitHub : `thedy-freelance-portfolio` (sans README)
2. Pousser :

```bash
cd /home/thedy/Projects/thedy-freelance-portfolio
git push -u origin main
```

Un hook `commit-msg` retire automatiquement toute ligne `Co-authored-by: Cursor`.

## Déployer sur Vercel

1. [vercel.com/new](https://vercel.com/new) → Import `Thedy09/thedy-freelance-portfolio`
2. Framework : **Other** · Build / Output : **vides**
3. Deploy

Lien direct d’import : https://vercel.com/new/clone?repository-url=https://github.com/Thedy09/thedy-freelance-portfolio
