const { name } = require('./package');
const path = require('path');
const paths = require('react-scripts/config/paths')

paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs')

module.exports = {
  webpack: (config) => {
    config.output.path = paths.appBuild
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.resolve.alias = {
      '@': path.resolve('src'),
      '@style': path.resolve('src/static/style')
    }

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};