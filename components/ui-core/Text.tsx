import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Text can be defined here
}

export const Text: React.FC<TextProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-text ' + className} {...props}>
      {children}
    </div>
  );
};

Text.displayName = 'Text';
