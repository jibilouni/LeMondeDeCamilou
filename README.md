# Le Monde de Camilou - Site Web

Site web moderne pour Le Monde de Camilou, espace multiservices à Lorient dédié aux enfements, parents et bien-être.

## 🎨 Technologies

- **Framework** : Astro 4.x
- **Styling** : Tailwind CSS
- **Fonts** : Inter (body) & Outfit (headings) via Google Fonts
- **Icons** : SVG inline
- **Performance** : Génération de site statique optimisé SEO

## 🌸 Palette de Couleurs

Le site utilise une palette pastel rose douce et accueillante :

- **Rose poudré** : `#FFB6C1` / `#FFC1CC`
- **Corail doux** : `#FFB6A3` / `#FF9A8B`
- **Pêche clair** : `#FFDAB9` / `#FFE4D0`
- **Background** : `#FFF9F5` / `#FFFAF7`

## 📁 Structure du Projet

```
/
├── public/
│   ├── images/          # Images à fournir (voir README dans ce dossier)
│   └── favicon.svg      # Favicon du site
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── EventCard.astro
│   │   ├── ServiceCard.astro
│   │   └── TestimonalCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro             # Page d'accueil
│       ├── blog.astro              # Blog
│       ├── contact.astro           # Formulaire de contact
│       ├── mentions-legales.astro
│       ├── cgv.astro
│       └── confidentialite.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## 🚀 Installation

### Prérequis

- Node.js 18.14.1 ou supérieur
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 💻 Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Démarre le serveur de développement sur `localhost:4321` |
| `npm run build` | Construit le site pour la production dans `./dist/` |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run astro` | Commandes CLI Astro |

## 🖼️ Images

Les images doivent être placées dans le dossier `/public/images/`. Consultez le `README.md` dans ce dossier pour connaître les images requises.

**Images nécessaires :**
- `yoga.jpg` - Service Yoga
- `ongles.jpg` - Service Prothésie Ongulaire
- `esthetique.jpg` - Service Esthéticienne
- `atelier-1.jpg` à `atelier-4.jpg` - Photos d'ateliers
- `hero.jpg` (optionnel) - Image hero

En l'absence d'images, des placeholders avec dégradés sont automatiquement affichés.

## 📄 Pages

### Page d'accueil (`/`)
- Section Hero avec CTA
- 8 types d'événements
- 3 services bien-être
- Galerie ateliers créatifs
- Témoignages clients
- Informations pratiques et carte

### Blog (`/blog`)
- Articles par catégories
- Filtrage par catégorie
- Grid responsive

### Contact (`/contact`)
- Formulaire de demande de devis
- Coordonnées complètes
- Carte Google Maps

### Pages légales
- `/mentions-legales` - Mentions légales
- `/cgv` - Conditions générales de vente
- `/confidentialite` - Politique de confidentialité

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints :

- **Mobile** : < 768px (1 colonne)
- **Tablet** : 768px - 1024px (2 colonnes)
- **Desktop** : > 1024px (3-4 colonnes)

## ♿ Accessibilité

- Contraste WCAG AA minimum
- Alt text sur toutes les images
- ARIA labels sur navigation et boutons
- Focus states visibles
- HTML sémantique
- Navigation au clavier

## 🎯 SEO

- Meta tags optimisés sur toutes les pages
- Schema.org (LocalBusiness + EventVenue)
- Open Graph et Twitter Cards
- URLs canoniques
- Sitemap automatique

## 📞 Informations de Contact

**Le Monde de Camilou**
- **Adresse** : 20 rue de Carnel, 56100 Lorient
- **Téléphone** : [06 18 91 02 16](tel:+33618910216)
- **Email** : [mallamaci.annelaure@gmail.com](mailto:mallamaci.annelaure@gmail.com)
- **Instagram** : [@cafepoussette.lorient](https://www.instagram.com/cafepoussette.lorient)
- **Facebook** : [Le Monde de Camilou](https://www.facebook.com/lemondedecamilou)

## 🔧 Configuration

### Tailwind

Les couleurs personnalisées et les fonts sont configurées dans `tailwind.config.mjs`.

### Astro

Configuration du site et intégrations dans `astro.config.mjs`.

## 📝 Licence

© 2026 Le Monde de Camilou. Tous droits réservés.

---

✨ **Site créé avec amour par Antigravity (Google Deepmind)**
