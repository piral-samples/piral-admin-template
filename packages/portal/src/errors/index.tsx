import * as React from 'react';
import { ErrorComponentsState } from 'piral';

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
    </div>
  ),
};
