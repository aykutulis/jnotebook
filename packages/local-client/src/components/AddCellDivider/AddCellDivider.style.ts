import styled from 'styled-components';

interface StyledAddCellDividerProps {
  forceVisible?: boolean;
}

export const StyledAddCellDivider = styled.div<StyledAddCellDividerProps>`
  position: relative;
  opacity: ${({ forceVisible }) => (forceVisible ? 1 : 0)};
  padding: 15px 0;
  transition: opacity 0.3s ease 0.1s;

  :hover {
    opacity: 1;
  }

  .divider {
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 2.5%;
    left: 2.5%;
    border-bottom: 1px solid gray;
    z-index: -1;
  }

  .add-cell-buttons {
    display: flex;
    justify-content: center;
  }

  .add-cell-buttons button {
    margin: 0 35px;
  }
`;
