import 'piral/polyfills';
import { renderInstance } from 'piral';
import { createAuthApi } from 'piral-auth';
import { layout } from './layout';
import { errors } from './errors';
import { setup } from './root';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

const { root } = renderInstance({
  layout,
  errors,
  extendApi: [
    createAuthApi({
      user: {
        id: 'jp',
        features: {},
        permissions: [],
        language: 'en',
        firstName: 'Jane',
        lastName: 'Pearson',
        mail: 'jp@example.com',
        role: 'Administrator',
        avatar: require('./images/face.jpg'),
      },
    }),
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

setup(root);
