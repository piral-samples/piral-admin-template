import * as React from 'react';
import { Notification } from 'tabler-react';
import { MessageItem } from '../types';

export interface NotificationsProps {
  data: Array<MessageItem>;
}

export const Notifications: React.FC<NotificationsProps> = ({ data }) => {
  const [items, setItems] = React.useState(data);
  const unreadCount = items.reduce((a, v) => a || v.unread, false);

  return (
    <Notification.Tray
      notificationsObjects={items}
      markAllAsRead={() => setItems(items => items.map(v => ({ ...v, unread: false })))}
      unread={unreadCount}
    />
  );
};
