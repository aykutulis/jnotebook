import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { startService } from './bundler';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

(async () => {
  await startService();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})();
