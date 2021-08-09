import React, { useEffect, useRef } from 'react';
import './index.css';

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
    <html>
      <head>
        <style>
          html { background-color: #fff }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (error) => {
            const rootEl = document.getElementById('root');
            rootEl.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>';
          };

          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error)
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (error) {
              handleError(error)
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 100);
  }, [code]);
  return (
    <div className='preview-wrapper'>
      <iframe sandbox='allow-scripts' srcDoc={html} ref={iframe} title='preview' />
      {err && <div className='preview-error'>{err}</div>}
    </div>
  );
};

export default Preview;
