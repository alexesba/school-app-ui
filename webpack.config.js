const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');


const path = require('path');
module.exports = (_env, argsv) => {
  const { mode } = argsv;

  const isProduction = mode === 'production';

  const imageLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }
  const jsxConfigRule = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          { runtime: 'automatic' }
        ],
      ]
    }
  };

  const cssConfigRule = {
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  return {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        jsxConfigRule,
        cssConfigRule,
        imageLoader,
      ]
    },
    resolve: {
      alias: {
        'images': path.resolve(__dirname, 'src/images'),
        extensions: ['.js', '.jpg', '.ico', '.svg', '.gif']
      },
      extensions: ['', '.*', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        scripts: ['/public/js/Chart.min.js']
      }),
      !isProduction && new ReactRefreshWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ].filter(Boolean),
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      proxy: {
        "/api/*": "http://[::1]:3000",
      },
      client: {
        overlay: true
      }
    }

  };
};
