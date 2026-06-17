import React from 'react';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Accordion can be defined here
}

export const Accordion: React.FC<AccordionProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-accordion ' + className} {...props}>
      {children}
    </div>
  );
};

Accordion.displayName = 'Accordion';
