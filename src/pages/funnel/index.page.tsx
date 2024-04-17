import SystemForm from '../../components/custom/forms/SystemForm';

const FunnelPage = () => {
  return (
    // <Hero img="/assets/code.jpg">
    <div className="container flex flex-1 items-center justify-center text-base-content">
      <SystemForm />
    </div>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
