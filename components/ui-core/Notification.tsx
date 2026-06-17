import React from 'react';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  // Additional props for Notification can be defined here
}

export const Notification: React.FC<NotificationProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={'ui-notification ' + className} {...props}>
      {children}
    </div>
  );
};

Notification.displayName = 'Notification';
