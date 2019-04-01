const path = require('path');
const { compilerOptions } = require('../tsconfig.json');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    include: [SRC_PATH],
    options: {
      transpileOnly: true, // use transpileOnly mode to speed-up compilation
      compilerOptions: {
        ...compilerOptions,
        declaration: false
      }
    }
  });

  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
