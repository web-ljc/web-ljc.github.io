const path = require('path')
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@style': path.resolve('src/static/style')
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'docs'
      webpackConfig.output= {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/'
      }
      return webpackConfig;
    },
  },
  // babel: {
  //   plugins: [[
  //     'import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //     }
  //   ]]
  // },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
    liveReload: false
  }
}