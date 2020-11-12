import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import styles from './Text.module.css'

const Text = (props) => {
  const { children, size } = props;

  const classNames = clsx({
    [styles.text]: true,
    [styles.textLarge]: size === 'large',
    [styles.textXLarge]: size === 'xlarge',
    [styles.textSmall]: size === 'small',
  });

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