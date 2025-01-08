import React from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}