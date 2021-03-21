const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin =  require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
console.log("isDev", isDev)
const isProd = process.env.NODE_ENV === 'production'
console.log("isProd", isProd)

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),         // Очищает папку со сборкой
    new HTMLWebpackPlugin({           // Создает автоматически index.html с нужными скриптами
      template: '../public/index.html',
      publicUrl: '../public',
      minify: {
        collapseWhitespace: isProd      // оптимизация html файла
      }
    }),
    new CopyWebpackPlugin ({
      patterns: [
        { from: '../public/favicon.ico', to: './' },
        { from: '../public/manifest.json', to: './' },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })    
  ]

  // if(isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }

  return base;
}

module.exports = {
  mode: 'development',                          // режим сборки (если не указываем, то собирает production)
  context: path.resolve(__dirname, 'src'),      // с какой папкой работаем
  
  entry: {                                      // откуда начать сборку
    main: './index.js'
  },
  
  output: {                                     
    filename: '[name].[hash].js',               // формируем имя с hash, чтобы не было проблем с кешем 
    path: path.resolve(__dirname, 'build')       // куда положить собранное
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      public: path.resolve('./public/'),
      src: path.resolve('./src/'),
      assets: path.resolve('./src/assets/'),
      components: path.resolve('./src/components/'),
      styles: path.resolve('./src/styles/'),
      utils: path.resolve('./src/utils/')
    }
  },
  
  optimization: {               // контролирует, что если два раза подключали библиотеку
    splitChunks: {              // нужно вынести код этой библиотеки в общий vendor.js файл
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
        exclude: /node_modules/,              // webpack идет справа налево (в данной записи снизу-наверх)  
      },
      {
        test: /\.(png|svg|jpg|gif)$/,         // если файл соотв. данному расширению, то используй use
        use: [{
          loader:'file-loader',               // webpack идет справа налево
          query: {
            name: 'img/[name].[ext]'
          }
        }],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,      // если файл соотв. данному расширению, то используй use
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
    contentBase: path.resolve(__dirname, 'build'),    // автоматом обновляет страницы, если что-то поменялось
    port: 4200,                                       // 
    hot: isDev,                                        // Если isDev=true, значит работаем в режиме development 
    historyApiFallback: true
  }
}
