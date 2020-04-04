import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Components
import ErrorBoundary from 'src/components/ErrorBoundary';
import PublicRoute from './components/PublicRoute';
// Routes
import PublicRoutes from './publicRoutes';
import CommonRoutes from './commonRoutes';

export default function Routes({ location }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch location={location}>
          {/* Public Routes */}
          <PublicRoute path="/" exact component={() => <PublicRoutes.Home />} />
          {/* Common Routes */}
          <Route path="/404" component={() => <CommonRoutes.NotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}
