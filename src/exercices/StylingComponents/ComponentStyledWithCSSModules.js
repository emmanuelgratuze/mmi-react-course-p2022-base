import React from 'react'
import styles from './ComponentStyledWithCSSModules.module.css'

/* 
styles = {
  'parent-block': 'className',
  'block': 'className',
}
*/
const ComponentStyledWithCSSModules = () => {
  return (
    <div className={styles.parentBlock}>
      <div className={styles.block}>
        Block 1
      </div>
      <div className={styles.block}>
        Block 2
      </div>
      <div className={styles.block}>
        Block 3
      </div>
    </div>
  )
}

export default ComponentStyledWithCSSModules
