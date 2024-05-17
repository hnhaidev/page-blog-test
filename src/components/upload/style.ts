import styled from 'styled-components';

export const StyledUpload = styled.div`
  min-height: 200px;
  padding: 8px;
  outline: none;
  border-radius: 0.25rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: rgba(145, 158, 171, 0.08);
  border: 1px dashed rgba(145, 158, 171, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  .upload-content {
    display: flex;
    flex-flow: column wrap;
    gap: 24px;
    align-items: center;
  }

  &.is-invalid {
    background-color: #fff2ef;
    border: 1px dashed #ff5530;
  }

  .upload-preview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.25rem;

    img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: center;
    }

    .upload-preview-close {
      position: absolute;
      top: 6px;
      right: 12px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
    }
  }
`;
