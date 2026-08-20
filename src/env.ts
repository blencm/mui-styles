declare const process: {
  env: {
    NODE_ENV?: string;
  };
};

/** Reads `process.env.NODE_ENV` at call time so tests and bundlers can change it. */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}
