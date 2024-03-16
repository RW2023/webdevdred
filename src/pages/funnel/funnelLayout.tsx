import Head from 'next/head';
import React from 'react';

import DarkToggle from '../../components/custom/UI/DarkToggle';
import { Footer } from '../../components/templates/footer';

type FunnelLayoutProps = {
  children: React.ReactNode;
};

const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
  return (
    <div data-theme="black">
      <Head>
        <title>Sign Up</title>
        <meta name="Sign-up Page" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkToggle />
      <main>{children}</main> {/* Custom footer */}
      <Footer />
    </div>
  );
};

export default FunnelLayout;