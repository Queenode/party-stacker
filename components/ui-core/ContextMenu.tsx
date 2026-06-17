import React from 'react';

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for ContextMenu can be defined here
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-contextmenu ' + className} {...props}>
      {children}
    </div>
  );
};

ContextMenu.displayName = 'ContextMenu';
