const path = require('path')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin')
// const ProvidePlugin = require('')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  entry: {
    index: ['./js/index.js', './scss/app.scss'],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../',
  },
  devServer: {
    contentBase: './index',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/wp-content/themes/igpa/dist',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        type: 'javascript/auto',
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|otf|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '../',
    }),
    new CopyPlugin(
      {
        patterns: [
          {
            from: './img',
            to: 'img',
          },
        ],
      },
      {
        ignore: [{ glob: 'svg/*' }],
      }
    ),

    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery"
    // })
  ],
}
