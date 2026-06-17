import React from 'react';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Tabs can be defined here
}

export const Tabs: React.FC<TabsProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-tabs ' + className} {...props}>
      {children}
    </div>
  );
};

Tabs.displayName = 'Tabs';
