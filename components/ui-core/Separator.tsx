import React from 'react';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Separator can be defined here
}

export const Separator: React.FC<SeparatorProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-separator ' + className} {...props}>
      {children}
    </div>
  );
};

Separator.displayName = 'Separator';
