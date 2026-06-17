import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Section can be defined here
}

export const Section: React.FC<SectionProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-section ' + className} {...props}>
      {children}
    </div>
  );
};

Section.displayName = 'Section';
