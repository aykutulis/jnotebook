import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => {
  return (
    <div className='loading-wrapper'>
      <progress className='progress is-small is-primary' max='100'>
        Loading
      </progress>
    </div>
  );
};
