import React from 'react';
// Components
import Footer from './components/Footer';

export default function PublicTemplate({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
