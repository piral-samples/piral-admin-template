import { MessageItem } from './types';

export function getMessages(): Promise<Array<MessageItem>> {
  return fetch('https://randomuser.me/api/?results=8&seed=abc')
    .then(res => res.json())
    .then(res =>
      res.results.map(item => ({
        unread: true,
        avatarURL: item.picture.thumbnail,
        message: `${item.login.username} joined the site.`,
        time: `at ${new Date(item.registered.date).toLocaleTimeString()}`,
      })),
    );
}
