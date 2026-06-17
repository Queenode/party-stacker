import React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Tooltip can be defined here
}

export const Tooltip: React.FC<TooltipProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-tooltip ' + className} {...props}>
      {children}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
