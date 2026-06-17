import React from 'react';

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Label can be defined here
}

export const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-label ' + className} {...props}>
      {children}
    </div>
  );
};

Label.displayName = 'Label';
