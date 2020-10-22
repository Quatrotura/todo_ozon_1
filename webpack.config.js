const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


module.exports = {
    mode: 'development',
    
     entry: './js/code.js',
     output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'index.bundle.js'
  },
watch: true,
plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 30,
      server: { baseDir: ['...2nd attempt/js'] }
    })
  ]
};
