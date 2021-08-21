import * as esbuild from 'esbuild-wasm/esm/browser';
import { unpkgPathPlugin } from './plugins/unpkgPathPlugin';
import { fetchPlugin } from './plugins/fetchPlugin';

export const startService = async () => {
  await esbuild.initialize({
    worker: true,
    wasmURL: 'https://unpkg.com/esbuild-wasm@0.12.15/esbuild.wasm',
  });
};

export const bundler = async (rawCode: string) => {
  try {
    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
      logLimit: 0,
      jsxFactory: '_React.createElement',
      jsxFragment: '_React.Fragment',
    });
    return {
      code: result.outputFiles[0].text,
      error: '',
    };
  } catch (error) {
    return {
      code: '',
      error: error.message,
    };
  }
};

export default bundler;
