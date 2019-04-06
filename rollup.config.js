import path from 'path';
import typescript from 'rollup-plugin-typescript2';

const ROOT_DIR = path.resolve(__dirname);

function createConfig({ format, outPostfix }) {
  return {
    input: path.join(__dirname, 'src', 'index.ts'),
    output: {
      format,
      name: 'ReactUnhook',
      file: path.join(ROOT_DIR, 'lib', `index${outPostfix}`),
      globals: {
        react: 'React'
      }
    },
    external: ['react'],
    plugins: [typescript()]
  };
}

module.exports = [createConfig({ format: 'umd', outPostfix: '.js' })];
