import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Box can be defined here
}

export const Box: React.FC<BoxProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-box ' + className} {...props}>
      {children}
    </div>
  );
};

Box.displayName = 'Box';
