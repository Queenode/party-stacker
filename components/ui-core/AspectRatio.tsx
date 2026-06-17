import React from 'react';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for AspectRatio can be defined here
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-aspectratio ' + className} {...props}>
      {children}
    </div>
  );
};

AspectRatio.displayName = 'AspectRatio';
