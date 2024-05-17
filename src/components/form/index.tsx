import React from 'react';

const FormItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="form-group">{children}</div>;
};

export { FormItem };
