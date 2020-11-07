import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/first-component" className={styles.menuItem}>Premier composant</Link>
      </li>
      <li>
        <Link to="/composition-and-props" className={styles.menuItem}>Composition et propriétés</Link>
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
    </ul>
  )
}

export default Menu
