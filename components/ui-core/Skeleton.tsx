import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Skeleton can be defined here
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-skeleton ' + className} {...props}>
      {children}
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
