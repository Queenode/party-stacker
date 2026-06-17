import React from 'react';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Column can be defined here
}

export const Column: React.FC<ColumnProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-column ' + className} {...props}>
      {children}
    </div>
  );
};

Column.displayName = 'Column';
