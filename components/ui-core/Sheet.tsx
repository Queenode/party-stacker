import React from 'react';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Sheet can be defined here
}

export const Sheet: React.FC<SheetProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-sheet ' + className} {...props}>
      {children}
    </div>
  );
};

Sheet.displayName = 'Sheet';
