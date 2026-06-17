import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Card can be defined here
}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-card ' + className} {...props}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
