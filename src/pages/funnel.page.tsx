import FunnelLayout from '@src/components/custom/funnelLayout';
import Grid1Contents from '@src/components/custom/UI/grid/Grid1Contents';
import Grid2Contents from '@src/components/custom/UI/grid/Grid2Contents';
import GridContainer from '@src/components/custom/UI/grid/GridContainer';
import Hero from '@src/components/custom/UI/Hero';

const FunnelPage = () => {
  return (
    <FunnelLayout>
      <Hero img="/assets/code.jpg">
        <div className="text-base-content">
          <GridContainer
            pageTitle="Sign up for my newsletter!"
            title1="Members Enjoy"
            title2="Sign Up Now!"
            content1={<Grid1Contents />}
            content2={<Grid2Contents />}
          />
        </div>
      </Hero>
    </FunnelLayout>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
