import React from 'react';
import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';

const App: React.FC = () => {
  return (
    <div>
      <CodeCell />
      <TextEditor />
    </div>
  );
};

export default App;
