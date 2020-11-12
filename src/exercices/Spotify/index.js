import React from 'react'
import SpotifyProvider from 'components/SpotifyProvider'
import Tracks from './Tracks'

// import Player from './Player'

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

const Spotify = () => {
  return (
    <div>
      <h1>Spotify</h1>

      <SpotifyProvider
        clientId={spotifyClientId}
        redirectUri={spotifyRedirectUri}
      >
        <Tracks />
      </SpotifyProvider>
    </div>
  )
}

export default Spotify
