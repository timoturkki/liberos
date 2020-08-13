import React from 'react';

import Layout from '../components/Layout';
import Button from '../components/Button';
import Header from '../examples/Header';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Logo />
      <Button>Hello there</Button>
    </Layout>
  );
}
