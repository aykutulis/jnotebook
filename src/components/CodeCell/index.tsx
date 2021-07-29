import React, { useState, useEffect } from 'react';
import bundler from '../..//bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState('const x = 5;');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(input);

      setCode(output);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ display: 'flex', height: '100%' }}>
        <Resizable direction='horizontal'>
          <CodeEditor input={input} setInput={setInput} onChange={(value) => setInput(value || '')} />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
