import React from 'react'
import './styles.css'

/*
  color: white;
  background-color: green;
*/

const ComponentStyledWithStyleProp = () => {
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'green'
      }}
    >
      <div>
        Block 1
      </div>
      <div>
        Block 2
      </div>
      <div>
        Block 3
      </div>
    </div>
  );
}

export default ComponentStyledWithStyleProp;
