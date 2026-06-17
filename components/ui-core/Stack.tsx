import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Stack can be defined here
}

export const Stack: React.FC<StackProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-stack ' + className} {...props}>
      {children}
    </div>
  );
};

Stack.displayName = 'Stack';
