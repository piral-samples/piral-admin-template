import * as React from 'react';
import { Page, Grid } from 'tabler-react';

export const DashboardContainer: React.FC = ({ children }) => (
  <Page.Content title="Dashboard">
    <Grid.Row cards>{children}</Grid.Row>
  </Page.Content>
);
