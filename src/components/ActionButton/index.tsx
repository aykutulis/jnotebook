import React from 'react';

interface ActionButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconComponent: JSX.Element;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, iconComponent, children }) => {
  return (
    <button className='button is-warning is-small' onClick={onClick}>
      <span className='icon'>
        {iconComponent}
        {children && children}
      </span>
    </button>
  );
};

export default ActionButton;
