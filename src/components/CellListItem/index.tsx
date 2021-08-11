import React, { useMemo } from 'react';
import { Cell } from '../../state';
import CodeCell from '../CodeCell';
import TextEditor from '../TextEditor';
import ActionBar from '../ActionBar';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const editor = useMemo((): JSX.Element => {
    if (cell.type === 'code') {
      return <CodeCell cell={cell} />;
    } else {
      return <TextEditor cell={cell} />;
    }
  }, [cell]);

  return (
    <div className='is-relative'>
      <ActionBar id={cell.id} />
      {editor}
    </div>
  );
};

export default CellListItem;
