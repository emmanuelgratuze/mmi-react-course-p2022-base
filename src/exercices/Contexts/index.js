import React, { useState } from 'react';
import Block from './Block';
import Context from './Context';

const ContextsExercice = () => {
  const [darkMode, setDarkMode] = useState(false);

  const context = {
    darkMode: darkMode,
    setDarkMode: setDarkMode
  };

  return (
    <Context.Provider value={context}>
      <div style={{
        height: '800px',
        backgroundColor: darkMode ? '#222222' : '#FFFFFF'
      }}>
        <Block />
      </div>
    </Context.Provider>
  );
}

export default ContextsExercice;
