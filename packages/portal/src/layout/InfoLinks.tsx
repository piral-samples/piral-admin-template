import * as React from 'react';
import { Grid, List, Button } from 'tabler-react';

export const InfoLinks: React.FC = () => (
  <>
    <Grid.Col auto>
      <List className="list-inline list-inline-dots mb-0">
        <List.Item className="list-inline-item">
          <a href="https://docs.piral.io/">Documentation</a>
        </List.Item>
        <List.Item className="list-inline-item">
          <a href="https://docs.piral.io/faq">FAQ</a>
        </List.Item>
      </List>
    </Grid.Col>
    <Grid.Col auto>
      <Button href="https://github.com/smapiot/piral" size="sm" outline color="primary" RootComponent="a">
        Source
      </Button>
    </Grid.Col>
  </>
);
