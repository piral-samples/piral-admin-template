import * as React from 'react';
import { ComponentsState, SwitchErrorInfo } from 'piral';
import { Layout } from './Layout';
import { DashboardContainer } from './DashboardContainer';

export const layout: Partial<ComponentsState> = {
  ErrorInfo: props => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer,
  Layout,
};
