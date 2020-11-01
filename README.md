# Cours React MMI

## Exercices
- Cloner le projet
- Installer les deps et démarrer le projet
- Modifier les fichiers dans `./exercices`

## Site à développer 🎉

### Récupérer la base du projet 
- Créer une copie (fork) du projet de base : https://github.com/emmanuelgratuze/mmi-react-course-p2021-project-base (fork)
- Récupérer sa version en local (pull)
- Sauvegarder une première modification (commit)
- Envoyer le commit (push)

### Déployer le projet 🚀
- Créer un compte netlify
- Connecter le compte à notre repository
- Déployer!
- Nous envoyer l'URL

### Présentation et livrables attendus
=> TODO: lister la présentation & les livrables attendus

## Ressources

### React

#### Composants
Les bases ici:
- imbrication de composants
- passage des propriétés

##### Styliser les composants (CSS)
- Importer un fichier de style
- Appliquer un style à une balise
- Utiliser le theme (les variables CSS)

#### Router
Le routeur permet de faire le lien entre nos pages et des URLs du navigateur.

```js
// src/App.js
<Switch>
  <Route path="/">
    <PageDaccueil />
  </Route>
  <Route path="/a-propos">
    <PageAPropos />
  </Route>
  <Route path="/credits">
    <PageDeCredits />
  </Route>
</Switch>
```

Dans l'exemple ci-dessus, on a défini 3 "routes" vers les pages de notre site:
- la route "/", c'est à dire, `http://monsite.com` montrera le composant `PageDaccueil`
- la route "/a-propos", c'est à dire, `http://monsite.com/a-propos` montrera le composant `PageAPropos`
- la route "/credits", c'est à dire, `http://monsite.com/credits` montrera le composant `PageDeCredits`

[Documentation officielle](https://reactrouter.com/web/guides/quick-start)

#### Hooks
# useState
# useEffect

#### Contextes
Les contextes permettre de partager des données entre composants qui n'ont pas de liens de parenté directs.

=> TODO: ajouter un schema sur les contextes 