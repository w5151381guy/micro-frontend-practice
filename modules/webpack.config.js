const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { dependencies } = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './src/index',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9527,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'modules',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
        './Input': './src/Input',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
};
