const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // to import index.html file inside index.js
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'src/assets', to: 'assets' }],
    // }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // styles files
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.svg$/,
      //   use: ['svgo-loader'],
      // },
      {
        test: /\.(webp|svg)$/i,
        type: 'asset',
        // ...snip...
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024, // Inline anything under 10kb
            // maxSize: false, // Inline anything under 10kb
          },
        },
        // ...snip...
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
      //   loader: 'url-loader',
      //   options: { limit: false },
      // },
    ],
  },
};
