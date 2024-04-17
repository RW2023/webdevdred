import { useEffect } from 'react';

interface Props {
  gistScriptUrl: string;
}

const GistEmbed: React.FC<Props> = ({ gistScriptUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = gistScriptUrl;
    script.async = true; // Ensures asynchronous loading

    // Append the script to the body or any specific element
    document.body.appendChild(script);

    // Cleanup function to remove script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [gistScriptUrl]); // Only rerun if gistScriptUrl changes

  return null; // This component does not render anything itself
};

export default GistEmbed;
