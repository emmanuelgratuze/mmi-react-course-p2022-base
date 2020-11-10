import React from 'react'
import PropTypes from 'prop-types'

/*
  props = {

    type: 'password'
    type: 'email'
  }
*/
const Input = (props) => {
  const { type } = props
  
  return (
    <div>
      <input
        type={type}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['password', 'email', 'text'])
}

export default Input