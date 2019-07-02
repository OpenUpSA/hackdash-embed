module.exports = {
  entry: [
    'whatwg-fetch',
    './src/embed.js',
  ],
  output: {
    filename: 'embed.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      }
    ],
  },
};
