import React from 'react';

export interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Video can be defined here
}

export const Video: React.FC<VideoProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-video ' + className} {...props}>
      {children}
    </div>
  );
};

Video.displayName = 'Video';
