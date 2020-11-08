const path = require('path');


module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'exercices': path.resolve(__dirname, './src/exercices')
    },
  },
};
