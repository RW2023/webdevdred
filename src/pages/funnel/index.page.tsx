import Link from 'next/link';

import SystemForm from '../../components/custom/forms/SystemForm';
import Hero from '../../components/custom/UI/Hero';

const FunnelPage = () => {
  return (
    // <Hero img="/assets/code.jpg">
    <Hero img="https://images.ctfassets.net/dnd5s50dhx3v/76reejLvctB6ZYSnCtkAfr/0bc90a6331ca233938271135160d361e/JungleDred.webp">
      <div className="container flex flex-1 flex-col items-center justify-center text-base-content">
        <SystemForm />
        <Link href={'/'}>
          <button type="button" className="btn-primary btn">
            Home
          </button>
        </Link>
      </div>
    </Hero>
  );
};

// using getInitialProps to signal not using the default layout.
FunnelPage.getInitialProps = async () => ({
  noDefaultLayout: true,
});

export default FunnelPage;
