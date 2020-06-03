import * as React from 'react';
import { PiletApi } from 'portal';
import { getMessages } from './api';
import { Notifications } from './parts/Notifications';

const RecentMessages = React.lazy(() => import('./parts/RecentMessagesTile'));
const ResponseTime = React.lazy(() => import('./parts/ResponseTimeTile'));

export function setup(app: PiletApi) {
  const connectMessages = app.createConnector(getMessages);

  app.registerTile(RecentMessages);
  app.registerTile(ResponseTime);

  app.registerMenu(connectMessages(Notifications), {
    type: 'header',
  });
}
