import React from 'react';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for ScrollArea can be defined here
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-scrollarea ' + className} {...props}>
      {children}
    </div>
  );
};

ScrollArea.displayName = 'ScrollArea';
