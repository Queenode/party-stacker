import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Button can be defined here
}

export const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-button ' + className} {...props}>
      {children}
    </div>
  );
};

Button.displayName = 'Button';
