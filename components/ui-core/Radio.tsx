import React from 'react';

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Radio can be defined here
}

export const Radio: React.FC<RadioProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-radio ' + className} {...props}>
      {children}
    </div>
  );
};

Radio.displayName = 'Radio';
