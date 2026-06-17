import React from 'react';

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for LoadingSpinner can be defined here
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-loadingspinner ' + className} {...props}>
      {children}
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';
