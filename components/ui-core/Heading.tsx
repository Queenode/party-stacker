import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Heading can be defined here
}

export const Heading: React.FC<HeadingProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-heading ' + className} {...props}>
      {children}
    </div>
  );
};

Heading.displayName = 'Heading';
