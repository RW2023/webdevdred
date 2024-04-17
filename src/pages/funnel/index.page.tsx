import SystemForm from '../../components/custom/forms/SystemForm';
import Hero from '../../components/custom/UI/Hero';

const FunnelPage = () => {
  return (
    // <Hero img="/assets/code.jpg">
    <Hero img="https://webdevdred.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdnd5s50dhx3v%2F76reejLvctB6ZYSnCtkAfr%2F0bc90a6331ca233938271135160d361e%2FJungleDred.webp&w=2048&q=75">
      <div className="container flex flex-1 items-center justify-center text-base-content">
        <SystemForm />
      </div>
    </Hero>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
