import Link from 'next/link';
import { FC } from 'react';

import DarkToggle from './DarkToggle';
import SubHeading from './SubHeading';

interface Props {}

const Navbar: FC<Props> = (): JSX.Element => {
  return (
    <nav
      className="bg-gray-800 text-white flex items-center justify-end p-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex items-center">
        <Link href="/" className="hover:text-gray-300 mr-6 text-xl font-semibold">
          <SubHeading title="Home" />
        </Link>
        <Link href="/signup" className="hover:text-gray-300 mr-6 text-xl font-semibold">
          <SubHeading title="subscribe" />
        </Link>
        <DarkToggle />
      </div>
    </nav>
  );
};

export default Navbar;
