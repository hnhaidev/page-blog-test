import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  errorMessage?: string;
}

export const Textarea: React.FC<TextAreaProps> = ({
  label,
  id,
  className,
  required,
  name,
  errorMessage,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className={`form-control ${!!errorMessage && 'is-invalid'} ${className}`}
      />
      <div className="invalid-feedback">{errorMessage || 'Field is required!'}</div>
    </React.Fragment>
  );
};
