import React from 'react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Checkbox can be defined here
}

export const Checkbox: React.FC<CheckboxProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-checkbox ' + className} {...props}>
      {children}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
