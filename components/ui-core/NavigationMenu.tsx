import React from 'react';

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for NavigationMenu can be defined here
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-navigationmenu ' + className} {...props}>
      {children}
    </div>
  );
};

NavigationMenu.displayName = 'NavigationMenu';
