import * as React from 'react';
import { ComponentsState, SwitchErrorInfo } from 'piral';
import { Layout } from './Layout';
import { DashboardContainer } from './DashboardContainer';
import { LoadingIndicator } from './LoadingIndicator';

export const layout: Partial<ComponentsState> = {
  ErrorInfo: props => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  LoadingIndicator,
  DashboardContainer,
  Layout,
};
