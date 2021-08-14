import React from 'react';
import { StyledLoading } from './Loading.style';

export const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <progress className='progress is-small is-primary' max='100'>
        Loading
      </progress>
    </StyledLoading>
  );
};
