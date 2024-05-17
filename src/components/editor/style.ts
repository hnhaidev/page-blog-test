import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const StyledEditor = styled(ReactQuill)`
  overflow: hidden;
  .ql-toolbar {
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  .ql-container {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border: 0;
  }

  .ql-editor {
    min-height: 160px;
    max-height: 640px;
    background-color: rgba(145, 158, 171, 0.08);
  }

  &.is-invalid {
    border: 1px solid #ff5530 !important;
    .ql-editor {
      background-color: #fff2ef;
    }
  }
`;
