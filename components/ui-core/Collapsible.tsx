import React from 'react';

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Collapsible can be defined here
}

export const Collapsible: React.FC<CollapsibleProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-collapsible ' + className} {...props}>
      {children}
    </div>
  );
};

Collapsible.displayName = 'Collapsible';
