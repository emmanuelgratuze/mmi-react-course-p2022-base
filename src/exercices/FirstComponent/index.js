import React from 'react'

import SecondComponent from './SecondComponent.js'

const FirstComponent= () => {
  return (
    <div>
      First component
      <SecondComponent
        color="red"
      >
        Second component children
      </SecondComponent>

      <SecondComponent>
        Second component children green please
      </SecondComponent>
    </div>
  )
}

export default FirstComponent;
