import React from 'react';

export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Form can be defined here
}

export const Form: React.FC<FormProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-form ' + className} {...props}>
      {children}
    </div>
  );
};

Form.displayName = 'Form';
