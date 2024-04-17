import SystemForm from '../../components/custom/forms/SystemForm';


const FunnelPage = () => {
  return (
    // <Hero img="/assets/code.jpg">
    <div className="text-base-content container flex flex-1 justify-center items-center">
      <SystemForm />
    </div>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
