const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'css?modules&localIdentName=[local]!postcss!sass' },
    ],
  },

  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM',
  },

  output: {
    filename: 'dist/index.js',
    libraryTarget: 'umd',
    library: 'FacebookLogin',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
