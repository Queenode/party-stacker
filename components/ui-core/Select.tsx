import React from 'react';

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Select can be defined here
}

export const Select: React.FC<SelectProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-select ' + className} {...props}>
      {children}
    </div>
  );
};

Select.displayName = 'Select';
