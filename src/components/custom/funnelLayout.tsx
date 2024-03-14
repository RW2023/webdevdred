import React from 'react';

type FunnelLayoutProps = {
  children: React.ReactNode;
};

const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* You can add a custom header, footer, etc., here */}
      <main className="flex flex-col items-center justify-center bg-base-100">{children}</main>{' '}
      {/* Custom footer */}
    </div>
  );
};

export default FunnelLayout;
