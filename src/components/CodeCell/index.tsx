import React, { useState } from 'react';
import bundler from '../..//bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState('const x = 5;');
  const [code, setCode] = useState('');

  const handleClick = async () => {
    const output = await bundler(input);

    setCode(output);
  };

  return (
    <div>
      <CodeEditor input={input} setInput={setInput} onChange={(value) => setInput(value || '')} />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
