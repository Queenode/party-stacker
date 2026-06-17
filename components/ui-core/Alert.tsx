import React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Alert can be defined here
}

export const Alert: React.FC<AlertProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-alert ' + className} {...props}>
      {children}
    </div>
  );
};

Alert.displayName = 'Alert';
