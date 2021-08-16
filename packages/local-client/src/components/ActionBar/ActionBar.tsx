import React from 'react';
import { ActionButton } from '../ActionButton';
import { useActions } from '../../hooks';
import { StyledActionBar } from './ActionBar.style';

interface ActionBarProps {
  id: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <StyledActionBar>
      <ActionButton iconComponent={<i className='fas fa-arrow-up'></i>} onClick={() => moveCell(id, 'up')} />
      <ActionButton iconComponent={<i className='fas fa-arrow-down'></i>} onClick={() => moveCell(id, 'down')} />
      <ActionButton iconComponent={<i className='fas fa-times'></i>} onClick={() => deleteCell(id)} />
    </StyledActionBar>
  );
};
