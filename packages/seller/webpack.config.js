const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { resolve } = require('path');

const outputPath = resolve(__dirname, 'build');

module.exports = env => {
  const isDev = env.NODE_ENV === 'development';
  const entry = isDev
    ? ['./src/index.tsx', 'webpack-plugin-serve/client']
    : './src/index.tsx';

  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv({
      path: env.ENV_FILE,
      safe: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    })
  ];

  if (isDev) {
    plugins.push(
      new Serve({
        historyFallback: true,
        static: [outputPath],
        host: 'localhost',
        port: 3000,
      }),
    );
    plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    plugins.push(new CompressionPlugin());
  }

  return {
    mode: isDev ? 'development' : 'production',
    devtool: 'eval-cheap-source-map',
    entry,
    stats: {
      errorDetails: true,
    },
    devServer: {
      hot: true,
      hmr: true,
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '.tsx'],
    },
    output: {
      publicPath: '/',
      filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
      path: outputPath,
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(ts|tsx|)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: isDev ? ['react-refresh/babel'] : [],
            },
          },
        },
        {
          test: /\.woff(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        },
        {
          test: /\.woff2(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              mimetype: 'application/font-woff2',
            },
          },
        },
        {
          test: /\.svg(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              mimetype: 'image/svg+xml',
            },
          },
        },
        {
          test: /\.(png|jpg)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        },
      ],
    },
  };
};
