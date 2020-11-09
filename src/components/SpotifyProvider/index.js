import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useDevice from './useDevice'
import useLoadSdk from './useLoadSdk'
import useToken from './useToken'
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const SpotifyProvider = ({ clientId, redirectUri, children }) => {
  useLoadSdk()
  const token = useToken({ clientId, redirectUri })
  const { deviceId, player } = useDevice({ token })
  const contextValue = useMemo(() => ({
    deviceId,
    token,
    player,
    spotifyApi
  }), [token, deviceId, player])

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
    }
  }, [token])

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

SpotifyProvider.propTypes = {
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired
}

export const SpotifyContext = Context

export default SpotifyProvider
