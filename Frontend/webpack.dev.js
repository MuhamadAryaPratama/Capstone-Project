const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'src/public'), // Menetapkan direktori public sebagai sumber konten statis
      },
      {
        directory: path.join(__dirname, 'dist'), // Menambahkan direktori dist jika perlu
      },
    ],
    open: true,
    hot: true,
    port: 9000,
  },
  devtool: 'inline-source-map',
});
