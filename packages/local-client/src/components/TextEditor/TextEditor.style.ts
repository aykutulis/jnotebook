import styled from 'styled-components';

export const StyledTextEditor = styled.div`
  .w-md-editor-preview strong {
    color: unset;
  }

  .w-md-editor-text-input {
    line-height: unset;
    font-size: unset;
    font-weight: unset;
    -webkit-text-fill-color: unset;
    color: #d4d4d4;
  }

  .w-md-editor-bar svg {
    display: none;
  }
  .w-md-editor-bar {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    height: 11px;
    cursor: row-resize;
    background-color: #37414b;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    position: relative;
  }
  em {
    font-style: italic;
  }
  .wmde-markdown hr {
    border-top: 1px solid #dee5ed;
  }
  .wmde-markdown ol {
    list-style: decimal;
  }
  .w-md-editor-show-live {
    /* Hide menu bar buttons to prevent accidental delete */
    z-index: 20;
  }
  .w-md-editor-toolbar {
    background-color: #37414b;
    border-bottom: 1px solid gray;
  }
  .w-md-editor-toolbar li button {
    color: #d4d4d4;
  }
  .w-md-editor-content {
    background-color: #202123;
  }
  .w-md-editor,
  .w-md-editor .w-md-editor-text-pre {
    color: #d4d4d4;
  }
  .w-md-editor-text-pre .bold {
    color: unset;
  }
  .token.list.punctuation {
    background-color: unset;
  }
`;
