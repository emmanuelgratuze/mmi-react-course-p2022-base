import React, { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx';

import styles from './styles.module.css'

const Timer = () => {
  const [visible, setVisible] = useState(true)
  const [time, setTime] = useState(0)
    
  const toggleVisible = () => setVisible(!visible)

  const visibleText = visible
    ? 'C\'est visible'
    : 'Ça n\'est pas visible';
    
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(time + 1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [time]);

  useEffect(() => {
    console.log('Bonjour !')
    return () => {
      console.log('Au revoir !')
    }
  }, []);

  return (
    <div>
      <button onClick={toggleVisible}>
        Cacher / montrer la description
      </button>

      
      <br />
      <br />
      {time}
      <br />
      <br />

      <br />
      <br />
      {visibleText}
      <br />
      <br />

      <p className={
        clsx(
          styles.description,
          { [styles.descriptionHidden]: !visible }
        )
      }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default Timer;
