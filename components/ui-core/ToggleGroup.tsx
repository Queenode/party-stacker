import React from 'react';

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for ToggleGroup can be defined here
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-togglegroup ' + className} {...props}>
      {children}
    </div>
  );
};

ToggleGroup.displayName = 'ToggleGroup';
