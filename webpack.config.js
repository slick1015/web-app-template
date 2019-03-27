const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client-src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.client.json'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client-src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
