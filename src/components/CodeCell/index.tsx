import React, { useEffect, useRef } from 'react';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';
import Resizable from '../Resizable';
import { Loading } from '../Loading';
import { useActions, useTypedSelector } from '../../hooks';
import { Cell } from '../../state';
import './index.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      createBundle(cell.id, cell.content);
      firstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      createBundle(cell.id, cell.content);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cell, createBundle]);

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
        <div className='preview-container'>
          <Preview code={bundle?.code} err={bundle?.error} />
          {!bundle || (bundle.loading && <Loading />)}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
