import React from 'react';

export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for HoverCard can be defined here
}

export const HoverCard: React.FC<HoverCardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-hovercard ' + className} {...props}>
      {children}
    </div>
  );
};

HoverCard.displayName = 'HoverCard';
