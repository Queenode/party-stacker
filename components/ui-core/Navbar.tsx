import React from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Navbar can be defined here
}

export const Navbar: React.FC<NavbarProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-navbar ' + className} {...props}>
      {children}
    </div>
  );
};

Navbar.displayName = 'Navbar';
