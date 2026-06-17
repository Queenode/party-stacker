import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Container can be defined here
}

export const Container: React.FC<ContainerProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-container ' + className} {...props}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
