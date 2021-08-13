import React, { useMemo } from 'react';
import { Cell } from '../../state';
import CodeCell from '../CodeCell';
import TextEditor from '../TextEditor';
import ActionBar from '../ActionBar';
import './index.css';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const child = useMemo((): JSX.Element => {
    if (cell.type === 'code') {
      return (
        <>
          <div className='action-bar-wrapper'>
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      );
    } else {
      return (
        <>
          <TextEditor cell={cell} />
          <ActionBar id={cell.id} />
        </>
      );
    }
  }, [cell]);

  return <div className='cell-list-item'>{child}</div>;
};

export default CellListItem;
