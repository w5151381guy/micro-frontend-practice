const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const dependencies = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 9527,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'module',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
        './Input': './src/Input',
      },
      shared: {
        ...dependencies,
        react: {
          eager: true,
        },
        'react-dom': {
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
