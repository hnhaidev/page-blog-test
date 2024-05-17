import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  loading,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={`btn ${className}`} disabled={loading || disabled}>
      {loading && (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {children}
    </button>
  );
};
