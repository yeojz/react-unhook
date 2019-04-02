const path = require('path');
const { compilerOptions } = require('../tsconfig.json');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '..');
const SOURCE = path.join(ROOT_DIR, 'src');
const STORIES = path.join(ROOT_DIR, 'stories');

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
    include: [SOURCE, STORIES],
    options: {
      transpileOnly: true, // use transpileOnly mode to speed-up compilation
      compilerOptions: {
        ...compilerOptions,
        declaration: false,
        rootDir: ROOT_DIR
      }
    }
  });

  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      compilerOptions: {
        rootDir: ROOT_DIR
      }
    })
  );

  return config;
};
