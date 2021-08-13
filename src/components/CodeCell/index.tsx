import React, { useState, useEffect } from 'react';
import bundler from '../..//bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';
import { useActions } from '../../hooks';
import { Cell } from '../../state';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(cell.content);

      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cell.content]);

  const handleUpdateCell = (value: string | undefined) => {
    updateCell(cell.id, value || '');
  };

  return (
    <Resizable direction='vertical'>
      <div style={{ display: 'flex', height: 'calc(100% - 10px)' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            input={cell.content}
            initialValue='const x = 5;'
            onChange={handleUpdateCell}
            onFormat={handleUpdateCell}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
