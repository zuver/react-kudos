const javaScriptModuleTemplate = {
  test: /\.jsx?$/,
  exclude: /(node_modules)/,
  query: {
    presets: ['react', 'es2015'],
  },
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.jsx',
  ],
  output: {
    path: `${__dirname}/public`,
    // publicPath: 'public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: `${__dirname}/public`,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    preLoaders: [
      Object.assign({
        loader: 'eslint',
      }, javaScriptModuleTemplate),
    ],
    loaders: [
      Object.assign({
        loader: 'babel',
      }, javaScriptModuleTemplate),
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(eot|ttf|woff)$/, loader: 'file-loader' },
    ],
  },
};
