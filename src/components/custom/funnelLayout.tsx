import Head from 'next/head';
import React from 'react';

import { Footer } from '../templates/footer';
import DarkToggle from './UI/DarkToggle';

type FunnelLayoutProps = {
  children: React.ReactNode;
};

const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
  return (
    <div data-theme="black">
      <Head>
        <title>Funnel Layout</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkToggle />
      {/* You can add a custom header, footer, etc., here */}
      <main>{children}</main> {/* Custom footer */}
      <Footer />
    </div>
  );
};

export default FunnelLayout;
