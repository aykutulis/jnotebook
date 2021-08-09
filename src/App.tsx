import React from 'react';
import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';
import { Provider } from 'react-redux';
import { store } from './state';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <CodeCell />
        <TextEditor />
      </div>
    </Provider>
  );
};

export default App;
