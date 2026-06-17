import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Row can be defined here
}

export const Row: React.FC<RowProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-row ' + className} {...props}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';
