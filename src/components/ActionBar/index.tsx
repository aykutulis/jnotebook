import React from 'react';
import ActionButton from '../ActionButton';
import { useActions } from '../../hooks';
import './index.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <ActionButton iconComponent={<i className='fas fa-arrow-up'></i>} onClick={() => moveCell(id, 'up')} />
      <ActionButton iconComponent={<i className='fas fa-arrow-down'></i>} onClick={() => moveCell(id, 'down')} />
      <ActionButton iconComponent={<i className='fas fa-times'></i>} onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
