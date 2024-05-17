import React from 'react';

import { StyledPaginationItem } from './style';

interface PaginationProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
}

export const PaginationItem: React.FC<PaginationProps> = ({
  children,
  disabled,
  active,
  onClick,
}) => {
  return (
    <StyledPaginationItem className={`page-item ${disabled && 'disabled'} ${active && 'active'}`}>
      <button
        className={`page-link ${disabled && !active ? 'text-muted' : active ? 'bg-dark text-white' : 'text-dark'}`}
        onClick={onClick}
      >
        {children}
      </button>
    </StyledPaginationItem>
  );
};
