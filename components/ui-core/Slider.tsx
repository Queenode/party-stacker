import React from 'react';

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Slider can be defined here
}

export const Slider: React.FC<SliderProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-slider ' + className} {...props}>
      {children}
    </div>
  );
};

Slider.displayName = 'Slider';
