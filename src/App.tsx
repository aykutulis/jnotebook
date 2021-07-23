import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm/esm/browser';
import { unpkgPathPlugin } from './plugins/unpkgPathPlugin';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const ref = useRef(false);

  const startService = async () => {
    await esbuild.initialize({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
    ref.current = true;
  };

  useEffect(() => {
    if (ref.current) return;
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) return;

    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin()],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
