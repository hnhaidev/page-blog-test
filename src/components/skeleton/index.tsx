import React from 'react';
import { StyledSkeleton } from './style';

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <StyledSkeleton className={className} {...props} />;
};
