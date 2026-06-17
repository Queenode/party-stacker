import React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Dialog can be defined here
}

export const Dialog: React.FC<DialogProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-dialog ' + className} {...props}>
      {children}
    </div>
  );
};

Dialog.displayName = 'Dialog';
