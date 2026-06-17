import React from 'react';

export interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Link can be defined here
}

export const Link: React.FC<LinkProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-link ' + className} {...props}>
      {children}
    </div>
  );
};

Link.displayName = 'Link';
