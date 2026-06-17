import React from 'react';

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Image can be defined here
}

export const Image: React.FC<ImageProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-image ' + className} {...props}>
      {children}
    </div>
  );
};

Image.displayName = 'Image';
