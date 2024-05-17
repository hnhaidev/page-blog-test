import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  className,
  required,
  name,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        id={id}
        {...props}
        className={`form-control ${!!errorMessage && 'is-invalid'} ${className}`}
      />
      <div className="invalid-feedback">{errorMessage || 'Field is required!'}</div>
    </div>
  );
};
