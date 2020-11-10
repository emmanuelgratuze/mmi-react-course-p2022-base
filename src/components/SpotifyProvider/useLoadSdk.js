import { useEffect, useState } from "react";
import { SPOTIFY_SDK_SCRIPT_URL } from "./constants.js";

const useLoadSdk = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    let script = document.createElement('script')
    script.type = 'text/javascript';

    // For IE
    if (script.readyState) {
      script.onreadystatechange = () => {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          setIsLoaded(true);
        }
      };
    } else {
      script.onload = function(){
        setIsLoaded(true);
      };
    }
    script.src = SPOTIFY_SDK_SCRIPT_URL;
    document.getElementsByTagName('body')[0].appendChild(script);
  }, [])

  return { isSdkLoaded: isLoaded };
}

export default useLoadSdk;
