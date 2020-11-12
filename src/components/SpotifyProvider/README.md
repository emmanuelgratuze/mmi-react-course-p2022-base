# SpotifyProvider

> /!\ Le code est uniquement fonctionnel pour un site en développement.

## 1. Utilisation de Spotify
Pour alimenter votre site allons consommer de la data provenant de l'API de Spotify.

Nous avons créé un composant appelé SpotifyProvider, qui permet d'appeler cette dernière depuis votre application plus simplement.

Pour utiliser l'API de spotify vous devez être authentifié. Pour cela vous vous connecter avec votre compte spotify, cela va générer un token, qui, ensuite, sera envoyé dans chaque requête à l'API.

Le provider que nous vous fournissons permet de générer ce token depuis la page de connexion Spotify et de l'enregistrer dans vos cookies. Nous le configurons ensuite en "global" dans votre app pour en pas avoir à le re-écrire à chaque fois.

Vous pouvez à tout moment regarder le code source pour comprendre comment cela fonctionne en partant du fichier index.js


## 2. Comment lancer le provider


### a. Utiliser le composant

```
import React from 'react'
import SpotifyProvider from 'components/.../SpotifyProvider'

const Spotify = () => {
    return (
        <SpotifyProvider 
            clientId="VOTRE CLIENT ID ICI" 
            spotifyRedirectUri="VOTRE REDIRECT URI ICI"
        >
            // Le reste de mon app
        </SpotifyProvider>
    )
}

export default Spotify

```

Le composant attend 2 propriétés :
* clientId : chaine de caractères
* spotifyRedirectUri : chaine de caractères


### b. Qu'est ce que clientId

Le clienId est un identifiant fourni par Spotify qui permet d'authentifier une application.
Vous allez pouvoir créer votre application depuis l'espace developper de Spotify.

[Créer son application Spotify](https://developer.spotify.com/documentation/web-api/quick-start/)

> /!\ Il vous faut un compte spotify premium pour utiliser au mieux l'api, si vous n'en avez pas, nous vous fournissons un clientId.


### b. Qu'est ce que spotifyRedirectUri

Lorsque que vous générez un token depuis spotify, l'utilisateur est envoyé vers une page de connexion. Une fois connecté il faut le renvoyer vers votre app, et cela se fait donc grâce à votre redirect uri.
Votre redirect uri est donc votre url générée par la commande ``` $ npm start``` et devrait ressembler à ``` http://localhost:3000 ```

Vous devez également enregistrer cette redirect uri dans votre application spotify : 
* [Aller sur son dashboard Spotify](https://developer.spotify.com/dashboard/applications/)
* Sélectionne son appilcation 
* Edit settings 
* Redirect URIs "add"

> /!\ Si vous utilisez notre clientId, merci de nous envoyer en privé votre redirect uri


### c. Envoyer ses propriétés avec un fichier d'environnement

Peut-être que dans votre groupe vous allez créer plusieurs app Spotify ou ne pas avoir la même url de redirection.
Si vous passez ces valeurs en dur vous allez donc devoir les modifier à chaque fois que vous pullez le projet pour remettre vos valeurs.

Du coup pour enregistrer ces valeurs dans "votre environnement de développement" on utilise un fichier en .env.local

* Vous allez à la racine de votre dossier
* Créer un fichier .env.local
* Ajouter les variables : 
```
#REACT_APP_SPOTIFY_REDIRECT_URI=VOTRE REDIRECT URI ICI
#REACT_APP_SPOTIFY_CLIENT_ID=VOTRE CLIENT ID ICI
```
* Les récupérer dans votre composant : 
```
const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
```
* Les passer en propriété
* Le faire pour chaque membre de votre groupe

Le fichier .env.local étant dans le .gitignore, à chaque push vous n'avez jamais écraser les valeurs de vos collaborateurs.


## 3. Comment utiliser le provider

Lorsque que vous créez un composant SpotifyProvider, ce dernier va vous renvoyer un Context, qui va pouvoir être utilisé dans toutes les composants à l'intérieur de votre SpotifyProvider

### a. Qu'est ce que le Context

Le Contexte de react permet de partager des valeurs entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.

Ce que l'on faisait avant : 

```

const MonComposantParent = () => {
    return (
        <Mon ComposantEnfantUn name="name"/>
        <Mon ComposantEnfantDeux name="name"/>
        <Mon ComposantEnfantTrois name="name"/>
    )
}

const ComposantEnfantUn = (props) => {
    return (
        <p>{props.name}</p>
    )
}

... et ainsi de suite

```


### b. Comment récupérer ces variables depuis un composant enfant

React fourni une fonction pour récupérer un context défini dans notre application : useContext(Nom du context)

```
import { SpotifyContext } from 'components/SpotifyProvider'

const MonComposantEnfant = () => {
    const { 
        spotifyApi, 
        deviceId,
        token,
        player } = useContext(SpotifyContext)

    return (
        <p>{token}</p>
    )
}

```


### c. Quelles sont les données renvoyées

* token : idenfiant d'utilisateur
* spotifyApi : instance permettant d'utiliser la librairie 'spotify-web-api-js'
* deviceId : idenfiant de player pour lire les sons depuis notre navigateur
* player : instance de notre player pour lire des liens uri de track
