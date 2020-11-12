import React from 'react'
import PropTypes from 'prop-types';
import styles from './Text.module.css'

// const chaine1 = 'chaine1';
// const chaine2 = 'chaine2';
// const chaines = chaine1 + chaine2;
// console.log(chaines)

const Text = (props) => {
  const { children, size } = props;

  // "text"
  let classNames = styles.text
  if (size === 'large') {
    // "text textLarge"
    // classNames = classNames + ' ' + styles.textLarge
    classNames = `${classNames} ${styles.textLarge}`
  }
  else if (size === 'small') {
    // "text textSmall"
    classNames = classNames + ' ' + styles.textSmall
  }
  else if (size === 'xlarge') {
    classNames = `${classNames} ${styles.textXLarge}`
  }

  return (
    <span className={classNames}>
      {children}
    </span>
  );
}

Text.propTypes = {
  size: PropTypes.oneOf(['small', 'large', 'xlarge'])
}

Text.defaultProps = {}

export default Text