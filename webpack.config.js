var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const root = process.cwd();

module.exports = {
  entry: path.join(root, 'entry.js'),
  output: {
    path: path.join(root, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
}
