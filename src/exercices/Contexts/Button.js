import React, { useContext, useState } from 'react';
import Context from './Context';

const Button = () => {
  const { darkMode, setDarkMode } = useContext(Context)

  const onClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <button onClick={onClick}>
      Toggle dark mode
    </button>
  );
}

export default Button;
