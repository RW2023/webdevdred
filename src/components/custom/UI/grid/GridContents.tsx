import { FC } from 'react';

interface Props {}

const GridContents: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
        <ul className="list-inside list-disc">
          <li>Exclusive discounts on web-dev tools and resources</li>
          <li>Access to member only forums</li>
          <li>Access to Like Minded beginner friendly community</li>
        </ul>
      </div>
      <p className="text-base-content">testing content 1</p>
    </>
  );
};

export default GridContents;
