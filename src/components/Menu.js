import React from 'react'
import { Link } from 'react-router-dom'
import Text from './Text2'

const Menu = () => {
  return (
    <div>
      <ul>
        <Text
          size="large"
        >
          Contenu du menu
        </Text>

        <li>
          <Link to="/">Home (artist)</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
