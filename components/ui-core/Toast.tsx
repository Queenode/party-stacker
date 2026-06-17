import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Toast can be defined here
}

export const Toast: React.FC<ToastProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-toast ' + className} {...props}>
      {children}
    </div>
  );
};

Toast.displayName = 'Toast';
