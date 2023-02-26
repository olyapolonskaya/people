let path = require('path');
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

let conf = {
    ...defaultConfig,
  entry: './src/blockadmin.js',
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'blockadmin.js',
      publicPath: 'dist/'
  },
  plugins: [
    new MiniCSSExtractPlugin({filename: 'styleadmin.css'})
 ]
};


let confTest = {
    ...defaultConfig,
  entry: './src/blockfront.js',
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'blockfront.js',
      publicPath: 'dist/'
  },
  plugins: [
    new MiniCSSExtractPlugin({filename: 'stylefront.css'})
 ]
};

module.exports = [conf, confTest];