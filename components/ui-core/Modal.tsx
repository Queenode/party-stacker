import React from 'react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Modal can be defined here
}

export const Modal: React.FC<ModalProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-modal ' + className} {...props}>
      {children}
    </div>
  );
};

Modal.displayName = 'Modal';
