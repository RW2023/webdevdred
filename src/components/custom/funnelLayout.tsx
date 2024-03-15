import Head from 'next/head';
import React from 'react';

type FunnelLayoutProps = {
  children: React.ReactNode;
};

const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Funnel Layout</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* You can add a custom header, footer, etc., here */}
      <main className="flex flex-col items-center justify-center">{children}</main>{' '}
      {/* Custom footer */}
    </div>
  );
};

export default FunnelLayout;
