import * as React from 'react';
import { PiletApi } from 'portal';

export function setup(app: PiletApi) {
  app.registerTile(() => <div>Welcome to Piral!</div>);
}
