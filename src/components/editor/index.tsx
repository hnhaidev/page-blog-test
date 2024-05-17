import React from 'react';
import ReactQuill from 'react-quill';

import { StyledEditor } from './style';

interface EditorProps {
  label?: string;
  value?: string;
  onChange?: (
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor,
  ) => void;
  required?: boolean;
  readOnly?: boolean;
  errorMessage?: string;
}

export const Editor: React.FC<EditorProps> = ({
  label,
  value,
  required,
  errorMessage,
  onChange,
  readOnly,
}) => {
  return (
    <React.Fragment>
      {label && (
        <label>
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <StyledEditor
        className={`border rounded ${!!errorMessage && 'is-invalid'}`}
        theme="snow"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      <div className="invalid-feedback">{errorMessage ? errorMessage : 'Field is required!'}</div>
    </React.Fragment>
  );
};
