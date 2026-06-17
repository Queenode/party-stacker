import React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Progress can be defined here
}

export const Progress: React.FC<ProgressProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-progress ' + className} {...props}>
      {children}
    </div>
  );
};

Progress.displayName = 'Progress';
