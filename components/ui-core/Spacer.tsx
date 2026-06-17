import React from 'react';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Spacer can be defined here
}

export const Spacer: React.FC<SpacerProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-spacer ' + className} {...props}>
      {children}
    </div>
  );
};

Spacer.displayName = 'Spacer';
