import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Badge can be defined here
}

export const Badge: React.FC<BadgeProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-badge ' + className} {...props}>
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';
