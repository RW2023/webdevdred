import SystemForm from '../../components/custom/forms/SystemForm';
import Hero from '../../components/custom/UI/Hero';

const SignUp = () => {
  return (
    <Hero img="https://images.ctfassets.net/dnd5s50dhx3v/76reejLvctB6ZYSnCtkAfr/0bc90a6331ca233938271135160d361e/JungleDred.webp">
      <div className="container flex flex-1 items-center justify-center text-base-content">
        <SystemForm />
      </div>
    </Hero>
  );
};

export default SignUp;
