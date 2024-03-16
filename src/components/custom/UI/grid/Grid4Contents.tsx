import { FC } from 'react';

interface Props {}

const Grid4Contents: FC<Props> = (): JSX.Element => {
  return (
    <div className="m-1 rounded-md bg-base-100 p-4 text-base-content shadow-lg">
      <ul className="list-inside list-disc rounded bg-base-300 p-3 md:text-lg">
        <li>Join our Discord community</li>
        <li>Collaborative projects to practice Open Source </li>
        <li>Code Review and Mentorship </li>
        <li>Networking opportunities</li>
      </ul>
    </div>
  );
};

export default Grid4Contents;
