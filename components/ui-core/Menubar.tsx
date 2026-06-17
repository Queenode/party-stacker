import React from 'react';

export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Menubar can be defined here
}

export const Menubar: React.FC<MenubarProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-menubar ' + className} {...props}>
      {children}
    </div>
  );
};

Menubar.displayName = 'Menubar';
