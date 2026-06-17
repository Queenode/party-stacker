import React from 'react';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Drawer can be defined here
}

export const Drawer: React.FC<DrawerProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-drawer ' + className} {...props}>
      {children}
    </div>
  );
};

Drawer.displayName = 'Drawer';
