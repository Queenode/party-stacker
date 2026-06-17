import React from 'react';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Pagination can be defined here
}

export const Pagination: React.FC<PaginationProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-pagination ' + className} {...props}>
      {children}
    </div>
  );
};

Pagination.displayName = 'Pagination';
