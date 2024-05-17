import React from 'react';
import { useDropzone } from 'react-dropzone';

import { StyledUpload } from './style';
import { UploadIcon } from '../../assets/icons';
import { TFilePreview } from '../../utils/types/file';

interface UploadProps {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  onChange?: (file?: TFilePreview) => void;
  valuePreview?: string;
  disabled?: boolean;
}

const Upload: React.FC<UploadProps> = ({
  label,
  required,
  errorMessage,
  onChange,
  valuePreview,
  disabled,
}) => {
  const [file, setFile] = React.useState<TFilePreview>();

  const onDrop = React.useCallback(
    (files: File[]) => {
      if (files.length > 0) {
        const currentFile = Object.assign(files[0], {
          preview: URL.createObjectURL(files[0]),
        });

        setFile(currentFile);
        onChange?.(currentFile);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(undefined);
    onChange?.(undefined);
  };

  const urlPreview = React.useMemo(
    () => valuePreview || file?.preview,
    [valuePreview, file?.preview],
  );

  return (
    <React.Fragment>
      {label && (
        <label>
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}

      <StyledUpload
        className={!!errorMessage ? 'is-invalid' : ''}
        {...getRootProps()}
        {...(disabled && {
          onDrop: (evt) => evt.preventDefault(),
          onClick: (evt) => evt.preventDefault(),
          style: {
            cursor: 'default',
          },
        })}
      >
        <input type="file" accept="image/*" hidden {...getInputProps()} disabled />
        {urlPreview ? (
          <div className="upload-preview">
            <img loading="lazy" src={urlPreview} alt="upload-preview" />
            <button
              type="button"
              className="close upload-preview-close text-white"
              aria-label="Close"
              onClick={handleRemove}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          <div className="upload-content">
            <UploadIcon width={50} height={50} />
            <div className="upload-content-title">
              <h5 className="text-center">Drop or Select file</h5>
              <p className="text-center">
                Drop files here or click <b>browse</b> thorough your machine
              </p>
            </div>
          </div>
        )}
      </StyledUpload>
      <div className="invalid-feedback">{errorMessage || 'Field is required!'}</div>
    </React.Fragment>
  );
};

export default Upload;
