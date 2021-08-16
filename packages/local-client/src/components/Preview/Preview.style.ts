import styled from 'styled-components';

export const StyledPreview = styled.div`
  background-color: #fff;
  position: relative;
  height: 100%;
  flex: 1;

  iframe {
    height: 100%;
    width: 100%;
  }

  .preview-error {
    position: absolute;
    top: 10px;
    left: 10px;
    color: red;
  }

  .react-draggable-transparent-selection &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
  }
`;
