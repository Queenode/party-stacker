import React from 'react';

export interface TextareaProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Textarea can be defined here
}

export const Textarea: React.FC<TextareaProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-textarea ' + className} {...props}>
      {children}
    </div>
  );
};

Textarea.displayName = 'Textarea';
