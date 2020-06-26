const path = require('path');

const entryPath = path.join(__dirname, './client/src');
const exitPath = path.join(__dirname, '/dist')

module.exports = {
  entry: [`${entryPath}/index.js`],
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: exitPath,
  }, 
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: entryPath,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  }
};