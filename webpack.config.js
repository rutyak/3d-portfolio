const webpack = require('webpack');

module.exports = {
  // other configurations
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/@mediapipe\/tasks-vision/],
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /vision_bundle_mjs\.js\.map/,
    }),
  ],
};
