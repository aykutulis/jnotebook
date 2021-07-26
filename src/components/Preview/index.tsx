import React, { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
}

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

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*'); // will be fixed
    }, 100);
  }, [code]);

  return <iframe sandbox='allow-scripts' srcDoc={html} ref={iframe} title='preview'></iframe>;
};

export default Preview;
