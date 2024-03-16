import { FC } from 'react';

import Hero from '@src/components/custom/UI/Hero';
import SubHeading from '@src/components/custom/UI/SubHeading';

interface Props {}

const GridContents: FC<Props> = (): JSX.Element => {
  return (
    <Hero img="/assets/club.jpg">
      <div>
        <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
          <ul className="list-inside list-disc rounded bg-base-300 p-3 md:text-lg">
            <li>Exclusive discounts</li>
            <li>Access to member only Resources</li>
            <li>Weekly Newsletter with tips and tricks</li>
            <li>Active Community</li>
          </ul>
        </div>
        <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
          <SubHeading title="Member Perks" />
          <ul className="list-inside list-disc rounded bg-base-300 p-3 md:text-lg">
            <li>Access New content early</li>
            <li>Discounts and courses and resources</li>
          </ul>
        </div>
      </div>
    </Hero>
  );
};

export default GridContents;
