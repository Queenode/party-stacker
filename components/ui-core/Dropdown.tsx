import React from 'react';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Dropdown can be defined here
}

export const Dropdown: React.FC<DropdownProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-dropdown ' + className} {...props}>
      {children}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
