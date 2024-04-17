import Link from 'next/link'
import { FC } from 'react';
import DarkToggle from './DarkToggle';
import SubHeading from './SubHeading';

interface Props {}

const Navbar: FC<Props> = (): JSX.Element => {
  return (
     <nav
      className="flex items-center justify-end p-4 bg-gray-800 text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex items-center">
        <Link href="/"
          className="text-xl font-semibold mr-6 hover:text-gray-300">
            <SubHeading title='Home' />
        </Link>
        <Link href="/funnel"
          className="text-xl font-semibold mr-6 hover:text-gray-300">
            <SubHeading title='subscribe' />
        </Link>
        <DarkToggle />
      </div>
    </nav>
  );
};

export default Navbar;