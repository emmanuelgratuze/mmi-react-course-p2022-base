import React from 'react'
import ComponentStyledWithStyleProp from './ComponentStyledWithStyleProp'
import ComponentStyledWithNativeCSS from './ComponentStyledWithNativeCSS'
import ComponentStyledWithCSSModules from './ComponentStyledWithCSSModules'

const StylingComponents = () => {
  return (

    <div>
      Composant stylisé avec la propriété style:
      <ComponentStyledWithStyleProp />

      Composant stylisé en CSS
      <ComponentStyledWithNativeCSS />

      Composant stylisé en CSS Modules
      <ComponentStyledWithCSSModules />


      
    </div>
  )
}

export default StylingComponents;
