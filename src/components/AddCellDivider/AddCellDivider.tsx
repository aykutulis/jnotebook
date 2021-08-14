import React from 'react';
import { StyledAddCellDivider } from './AddCellDivider.style';
import { useActions } from '../../hooks';

interface AddCellDividerProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

export const AddCellDivider: React.FC<AddCellDividerProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <StyledAddCellDivider forceVisible={forceVisible}>
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
    </StyledAddCellDivider>
  );
};
