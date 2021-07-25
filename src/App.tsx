import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm/esm/browser';
import { unpkgPathPlugin } from './plugins/unpkgPathPlugin';
import { fetchPlugin } from './plugins/fetchPlugin';

const App: React.FC = () => {
  const ref = useRef(false);
  const iframe = useRef<any>();

  const [input, setInput] = useState('');

  const startService = async () => {
    await esbuild.initialize({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.12.15/esbuild.wasm',
    });
    ref.current = true;
  };

  useEffect(() => {
    if (ref.current) return;
    startService();
  }, []);

  const handleClick = async () => {
    if (!ref.current) return;

    iframe.current.srcdoc = html;

    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
  };

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (error) {
              const rootEl = document.getElementById('root');
              rootEl.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>';
            }
          }, false)
        </script>
      </body>
    </html>
  `;

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <iframe sandbox='allow-scripts' srcDoc={html} ref={iframe} title='preview'></iframe>
    </div>
  );
};

export default App;
