import { FC } from 'react';

interface Props {}

const GridContents: FC<Props> = (): JSX.Element => {
  return (
    <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
      <ul className="list-inside list-disc text-lg">
        <li>Exclusive discounts</li>
        <li>Access to member only Resources</li>
        <li>Weekly Newsletter packed with tips and tricks</li>
      </ul>
    </div>
  );
};

export default GridContents;
