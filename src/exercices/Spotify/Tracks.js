import React, { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../../components/SpotifyProvider';


/* 
{
  key: 'value',
}

const liste = [
  'value1',
  'value2'
]
liste[0] // => 'value1'
liste[&] // => 'value 2'
*/


const Tracks = () => {
  const { spotifyApi } = useContext(SpotifyContext)
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const loadTracks = async () => {
      const results = await spotifyApi.searchTracks('vulfpeck', { limit: 5 })
      setTracks(results.tracks.items)
    }
    loadTracks();
  }, [spotifyApi])

  return (
    <div>
      Tracks
      <ul>
        {tracks.map((track) => {
          return (
            <ul>
              <h3>{track.name}</h3>
              <h4>{track.album.name}</h4>
              <img
                src={track.album.images[1].url}
                alt={`Cover of ${track.album.name}`}
              />
            </ul>
          )
        })}
      </ul>
    </div>
  )
}

export default Tracks
