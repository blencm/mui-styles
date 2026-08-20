import { isProduction } from '../env';

let indexCounter: number = -1e9;

export function increment() {
  indexCounter += 1;

  if (!isProduction()) {
    if (indexCounter >= 0) {
      console.warn(
        [
          'MUI: You might have a memory leak.',
          'The indexCounter is not supposed to grow that much.',
        ].join('\n'),
      );
    }
  }

  return indexCounter;
}
