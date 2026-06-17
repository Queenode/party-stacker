import React from 'react';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Popover can be defined here
}

export const Popover: React.FC<PopoverProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-popover ' + className} {...props}>
      {children}
    </div>
  );
};

Popover.displayName = 'Popover';
