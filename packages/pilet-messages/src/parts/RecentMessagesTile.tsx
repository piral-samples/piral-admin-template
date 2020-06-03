import * as React from 'react';
import { Grid, StatsCard } from 'tabler-react';

const RecentMessagesTile: React.FC = () => (
  <Grid.Col width={6} sm={4} lg={3}>
    <StatsCard layout={1} movement={-3} total="17" label="Recent Messages" />
  </Grid.Col>
);

export default RecentMessagesTile;
