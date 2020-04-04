import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Page is not found :-(</h2>
      <Link to="/">Go to the main page</Link>
    </>
  );
}
