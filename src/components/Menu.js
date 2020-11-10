import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
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
