import { join } from 'path';
import { readdirSync } from 'fs';
import * as index from './index';

const currentDir = join(__dirname);

const files = readdirSync(currentDir).filter(
  (file): boolean => {
    const isTestFile = file.indexOf('.test.') > -1;
    const isUnhook = file.indexOf('Use') === 0;

    return isUnhook && !isTestFile;
  }
);

describe('index', (): void => {
  test('number of exports should match Use*', (): void => {
    expect(Object.keys(index)).toHaveLength(files.length);

    const hasAllUnhook = files.every(
      (file): boolean => {
        const key = file.replace('.tsx', '');
        return index.hasOwnProperty(key);
      }
    );

    expect(hasAllUnhook).toBe(true);
  });
});
