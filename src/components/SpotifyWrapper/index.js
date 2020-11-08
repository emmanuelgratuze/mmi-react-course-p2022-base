import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useDevice from './useDevice'
import useLoadSdk from './useLoadSdk'
import useToken from './useToken'

const SpotifyWrapper = ({ clientId, redirectUri, children }) => {
  useLoadSdk()
  const token = useToken({ clientId, redirectUri })
  const { deviceId } = useDevice({ token })
  const contextValue = useMemo(() => ({ deviceId, token }), [token, deviceId])

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

SpotifyWrapper.propTypes = {
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired
}

export const SpotifyContext = Context

export default SpotifyWrapper
