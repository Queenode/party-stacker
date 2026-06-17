import React from 'react';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Flex can be defined here
}

export const Flex: React.FC<FlexProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-flex ' + className} {...props}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';
