import React, { useEffect, useRef } from 'react';
import { CodeEditor } from '../CodeEditor';
import { Preview } from '../Preview';
import { Resizable } from '../Resizable';
import { Loading } from '../Loading';
import { StyledPreviewContainer } from './CodeCell.style';
import { useActions, useTypedSelector, useCumulativeCode } from '../../hooks';
import { Cell } from '../../state';

interface CodeCellProps {
  cell: Cell;
}

export const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      createBundle(cell.id, cumulativeCode);
      firstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cell.id, cumulativeCode, createBundle]);

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
        <StyledPreviewContainer>
          <Preview code={bundle?.code} err={bundle?.error} />
          {!bundle || (bundle.loading && <Loading />)}
        </StyledPreviewContainer>
      </div>
    </Resizable>
  );
};
