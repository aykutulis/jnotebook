import React from 'react';
import { useActions } from '../../hooks';
import './index.css';

interface AddCellDividerProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCellDivider: React.FC<AddCellDividerProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell-divider ${forceVisible && 'force-visible'}`}>
      <div className='add-cell-buttons'>
        <button className='button is-primary is-rounded is-small' onClick={() => insertCellAfter(prevCellId, 'code')}>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button className='button is-primary is-rounded is-small' onClick={() => insertCellAfter(prevCellId, 'text')}>
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default AddCellDivider;
