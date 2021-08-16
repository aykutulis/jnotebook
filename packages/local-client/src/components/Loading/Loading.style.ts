import styled, { keyframes } from 'styled-components';

const fadeInAnimate = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledLoading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  animation: ${fadeInAnimate} 0.5s;
`;
