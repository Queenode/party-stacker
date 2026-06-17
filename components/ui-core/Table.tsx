import React from 'react';

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Table can be defined here
}

export const Table: React.FC<TableProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-table ' + className} {...props}>
      {children}
    </div>
  );
};

Table.displayName = 'Table';
