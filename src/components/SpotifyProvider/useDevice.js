const { useEffect, useState } = require("react")

const useDevice = ({ token }) => {

  const [deviceId, setDeviceId] = useState(null);
  const [player, setPlayer] = useState();

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      if (!token) {
        return;
      }

      const player = new window.Spotify.Player({
        name: 'App player',
        getOAuthToken: cb => { cb(token); }
      });
    
      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });
    
      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state); });
    
      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id);
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    
      // Connect to the player!
      player.connect();
      setPlayer(player);
    };
  }, [token])

  return { isDeviceReady: !!deviceId, deviceId, player }
}

export default useDevice
