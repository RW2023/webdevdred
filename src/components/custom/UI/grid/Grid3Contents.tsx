import { FC } from 'react';

import Hero from '@src/components/custom/UI/Hero';

interface Props {}

const Grid3Contents: FC<Props> = (): JSX.Element => {
  return (
    <Hero img="/assets/community.jpg">
      <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
        <ul className="list-inside list-disc md:text-lg">
          <li>Join our Discord community</li>
          <li>Collaborative projects to practice Open Source </li>
          <li>Code Review and Mentorship </li>
          <li>Networking opportunities</li>
        </ul>
      </div>
    </Hero>
  );
};

export default Grid3Contents;
