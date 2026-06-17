import React from 'react';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Carousel can be defined here
}

export const Carousel: React.FC<CarouselProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-carousel ' + className} {...props}>
      {children}
    </div>
  );
};

Carousel.displayName = 'Carousel';
