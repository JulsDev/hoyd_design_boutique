const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin =  require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const webpack = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
console.log("isDev", isDev)
const isProd = process.env.NODE_ENV === 'production'
console.log("isProd", isProd)

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),         // Clear build folder
    new HTMLWebpackPlugin({           // Creates automatically index.html with the necessary scripts
      template: path.resolve(__dirname, 'public/index.html'),
      publicUrl: path.resolve(__dirname, 'public'),
      minify: {
        collapseWhitespace: isProd      // html optimization
      }
    }),
    new CopyWebpackPlugin ({
      patterns: [
        { 
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'build')
        },
        {
          from: path.resolve(__dirname, 'public/manifest.json'),
          to: path.resolve(__dirname, 'build')
        },
        {
          from: path.resolve(__dirname, 'public/404.html'),
          to: path.resolve(__dirname, 'build')
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': process.env.PUBLIC_URL
    }) 
  ]

  // if(isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }

  return base;
}

module.exports = {
  mode: 'development',                          // build mode (production by default)
  context: path.resolve(__dirname, 'src'),
  
  entry: {                                      // build start
    main: './index.js'
  },
  
  output: {                                     
    filename: '[name].[hash].js', 
    path: path.resolve(__dirname, 'build')
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      public: path.resolve(__dirname, 'public/'),
      src: path.resolve(__dirname, 'src/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  
  optimization: {               // controls that if the library was connected twice
    splitChunks: {              // move the code of this library into a common vendor.js file 
      chunks: 'all'
    }
  },
  
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  flexbox: 'no-2009'
                }),
                cssnano({
                  preset: 'default'
                })
              ]
            }
          },
          'sass-loader'
        ],
        exclude: /node_modules/,  
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader:'file-loader',
          query: {
            name: 'img/[name].[ext]'
          }
        }],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: plugins(),

  devServer: {                        
    contentBase: path.resolve(__dirname, 'build'),
    port: 4200,
    hot: isDev,
    historyApiFallback: true
  }
}
