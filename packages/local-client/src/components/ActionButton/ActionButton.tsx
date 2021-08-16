import React from 'react';

interface ActionButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconComponent: JSX.Element;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, iconComponent, children }) => {
  return (
    <button className='button is-primary is-small' onClick={onClick}>
      <span className='icon'>
        {iconComponent}
        {children && children}
      </span>
    </button>
  );
};
