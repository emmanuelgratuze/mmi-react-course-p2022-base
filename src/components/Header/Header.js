import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      Cours React
      <ul className={styles.menu}>
        <li>
          <Link to="/first-component" className={styles.menuItem}>Premier composant</Link>
        </li>
        <li>
          <Link to="/styling-components" className={styles.menuItem}>Styliser les composants</Link>
        </li>
        <li>
          <Link to="/hooks" className={styles.menuItem}>Hooks</Link>
        </li>
        <li>
          <Link to="/routing" className={styles.menuItem}>Routing</Link>
        </li>
        <li>
          <Link to="/contexts" className={styles.menuItem}>Contexts</Link>
        </li>
        <li>
          <Link to="/spotify" className={styles.menuItem}>Spotify</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
