import React from 'react' 
import { Link } from 'react-router-dom'

const Button = ({ children, color, to }) => {
  const styles = {
    backgroundColor: color
  }
  return (
    <Link to={to}>
      <button style={styles}>
        {children}
      </button>
    </Link>
  )
}

export default Button
