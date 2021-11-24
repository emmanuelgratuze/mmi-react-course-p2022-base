import React from 'react'
import Button from 'components/Button';

const FirstComponent= () => {

  return (
    <div style={{ padding: "100px" }}>
      <Button color="red" to="/styling-components">
        Styliser les composants
      </Button>

      <br />
      <br />

      <Button color="green" to="/hooks">
        Hooks
      </Button>

      <br />
      <br />

      <Button color="yellow" to="/contexts">
        Contextes
      </Button>
    </div>
  )
}

export default FirstComponent;
