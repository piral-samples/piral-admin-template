import * as React from 'react';
import { Grid, StatsCard } from 'tabler-react';

const ResponseTimeTile: React.FC = () => (
  <Grid.Col width={6} sm={4} lg={3}>
    <StatsCard layout={1} movement={1} total="12min" label="Response Time" />
  </Grid.Col>
);

export default ResponseTimeTile;
