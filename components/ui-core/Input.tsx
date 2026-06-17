import React from 'react';

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Input can be defined here
}

export const Input: React.FC<InputProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-input ' + className} {...props}>
      {children}
    </div>
  );
};

Input.displayName = 'Input';
