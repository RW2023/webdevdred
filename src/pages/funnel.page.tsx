import FunnelLayout from '@src/components/custom/funnelLayout';
import GridContent from '@src/components/custom/UI/grid/GridContent';
import Heading from '@src/components/custom/UI/Heading';

const FunnelPage = () => {
  return (
    <FunnelLayout>
      <div className="text-base-content">
        <Heading title="testing Headline" />
        <GridContent
          pageTitle="testing Page Title"
          title1="testing Title 1"
          title2="testing Title 2"
          content1={<p>testing content 1</p>}
          content2={<p>testing content 2</p>}
        />
      </div>
    </FunnelLayout>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
