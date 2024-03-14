import FunnelLayout from '@src/components/custom/funnelLayout';

const FunnelPage = () => {
  return (
    <FunnelLayout>
      <div className="text-base-content">
        <h1>Funnel</h1>
      </div>
    </FunnelLayout>
  );
};

// Add this if you're using getInitialProps to signal not using the default layout.
// Note: Using getInitialProps just to disable the default layout might not be the best approach as it disables Automatic Static Optimization.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
