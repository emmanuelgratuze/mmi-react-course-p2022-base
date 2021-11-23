# Cours React MMI

## Prérequis
- Créer un compte github pour tous les membres des équipes: https://github.com/
- Créer un compte Netlify par équipe: https://www.netlify.com/

## Exercices
- Cloner le repo : `git clone git@github.com:emmanuelgratuze/mmi-react-course-p2022.git`
- Installer les dépendances : `npm install`
- Démarrer le projet: `npm start`
- Les fichiers des exercices se trouve dans : `./src/exercices`

## Plateforme de streaming  🎧

### Setup du projet ⚒️
#### 1. Créer ou récupérer la base du projet
- Créer un repository à partir du template : https://github.com/emmanuelgratuze/mmi-react-course-p2022-project-base
**ou**
- Créer son repository de zéro et créer sa propre base de projet (de préférence avec [create-react-app](https://create-react-app.dev/))

#### 2. Configurer l'accès SSH à notre compte
*Vous pouvez passer cette étape si vous avez déjà une clé SSH configurée avec votre compte Github*

- Générer une clé SSH et ajouter l'ajouter à notre compte Github: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

#### 3. Setup le projet en local
- Récupérer le code : `git clone <url du repository>`
*L'URL du repo se trouve sur la page de votre projet forké. Elle devrait être au format :
`git@github.com:<votre-username-github>/mmi-react-course-p2022-project-base.git`*
- Installer les dépendances : `npm install`

#### 4. Modifier le projet
- Modifier par exemple `src/pages/Home` en ajoutant une ligne ou n'importe quel contenu
- `git status` (optionnel : vérifie les modifications en cours). Vous devriez voir apparaître le fichier `src/pages/Home` que vous venez de modifier
- `git add -A` (sélectionne toutes les modifications que l'on vient de faire) 
- `git status` de nouveau (optionnel). Le nom du fichier `src/pages/Home` est normalement maintenant vert ce qui signifie qu'il est sélectionné 
- `git commit -m "Our first commit"` (crée le commit en local)
- `git push origin main` (envoie le commit que l'on vient de faire sur la branche "main" de notre dépot)
*Si quelqu'un de l'équipe a déjà envoyé un commit avant, il faut le récupérer avant de pouvoir pousser le sien :*
- `git pull origin main` (récupère les derniers commits sur la branche "main")
- Le cas échéant... résoudre les conflits 🤪 et lancer de nouveau la précédente commande

### Déployer le projet 🚀
#### 1. Créer un compte Netlify 
- https://www.netlify.com/
*Conseil: utiliser son compte Github, c'est plus simple 😎*
#### 2. Créer un nouveau site et le connecter au projet Github
  - Depuis le dashboard, cliquer sur "Create new site"
  - Sélectionner Github comme "Git provider"
  - Autoriser l'application depuis la fenêtre qui vient de s'ouvrir
  - Sélectionner le repository forké précédemment
  - Laisser les champs du formulaire qui suit tels quels et cliquer sur "Deploy site"
*Si le projet n'est pas créé à partir de celui de `mmi-react-course-p2022-project-base`, vérifiez bien que la commande de build **"Build command"** et la destination vers les fichiers buildés **"Publish directory"** sont corrects.*
  - Attendre la fin du déploiement et vérifier que le site fonctionne correctement
  - Nous communiquer l'URL de votre site 🙂

### Structure du projet
`public`: Les fichiers qu'il contient ne sont pas compilés et sont copiés à la racine de mon site.
Exemple : si on crée un fichier `public/image.jpg`, alors ce fichier sera accessible ici :
- `http://localhost:3000/image.jpg` en développement (local)
- `https://votre.site.sur.netlify.com/image.jpg` en production (sur Netlify)

`src/`: Emplacement de vos fichiers Javascript et de style. Aucune arborescence n'est imposée.

`craco.config.js`: Configuration Craco

`node_modules`: Emplacement des paquets installés via NPM

`.env` et `.env.local`: Permettent la définition de variables d'environnement

`.gitignore`: Liste des fichiers que l'on ne souhaite pas envoyer sur git

`package.json`: Fichier de configuration de NPM

## Ressources

### NPM
- [Introduction à NPM](https://maxlab.fr/javascript/comprendre-et-maitriser-npm-introduction/)

### PropTypes
- [Documentation PropTypes](https://fr.reactjs.org/docs/typechecking-with-proptypes.html)

### React
- [Fondamentaux de React](https://fr.reactjs.org/docs/getting-started.html)

### Spotify
- [Spotify Web API Reference](https://developer.spotify.com/documentation/web-api/reference/)

### Create React App (CRA)
- Create React fournit la configuration de base au projet. [Documentation](https://create-react-app.dev/docs/documentation-intro)

- On utilise [Craco](https://github.com/gsoft-inc/craco) pour configurer CRA, via le fichier `craco.config.js` présent à la racine du projet. [Documentation](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration)

### Webpack
- [Documentation](https://webpack.js.org/)