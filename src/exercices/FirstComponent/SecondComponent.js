import React from 'react'
import PropTypes from "prop-types";

const SecondComponent = (props) => {
  const { children, color } = props;

  return (
    <div
      style={{
        backgroundColor: color,
        padding: '10px'
      }}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

SecondComponent.defaultProps = {
  color: 'green'
}

SecondComponent.propTypes = {
  color: PropTypes.string
}

export default SecondComponent
