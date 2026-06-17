import React from 'react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Breadcrumb can be defined here
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-breadcrumb ' + className} {...props}>
      {children}
    </div>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
