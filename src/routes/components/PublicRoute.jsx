import React from 'react';
import { Route } from 'react-router-dom';
// Components
import PublicTemplate from 'src/templates/PublicTemplate';

export default function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={() => (
        <PublicTemplate>
          <Component />
        </PublicTemplate>
      )}
    />
  );
}
