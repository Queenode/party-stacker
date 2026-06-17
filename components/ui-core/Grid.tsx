import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Grid can be defined here
}

export const Grid: React.FC<GridProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-grid ' + className} {...props}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
