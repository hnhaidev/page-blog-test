import React from 'react';
import { StyledSpinnerPage } from './style';

export const Spinner = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const SpinnerPage = () => {
  return (
    <StyledSpinnerPage>
      <Spinner />
    </StyledSpinnerPage>
  );
};
