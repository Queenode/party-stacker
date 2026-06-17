import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Avatar can be defined here
}

export const Avatar: React.FC<AvatarProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-avatar ' + className} {...props}>
      {children}
    </div>
  );
};

Avatar.displayName = 'Avatar';
