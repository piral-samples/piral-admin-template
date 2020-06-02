import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { PiletApi } from 'piral';
import { Nav, Button } from 'tabler-react';
import { issueTrackerUrl } from './constants';

export function setup(api: PiletApi) {
  api.registerMenu(
    () => (
      <Nav.Item type="div" className="d-none d-md-flex">
        <Button href={issueTrackerUrl} target="_blank" outline size="sm" RootComponent="a" color="primary">
          Issues
        </Button>
      </Nav.Item>
    ),
    {
      type: 'header',
    },
  );

  api.registerMenu(() => <Nav.Item icon="home" value="Dashboard" to="/" LinkComponent={NavLink} useExact />, {
    type: 'general',
  });
}
