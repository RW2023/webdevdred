import Link from 'next/link';
import { FC } from 'react'; // This import is necessary for FC (Function Component) type

import SubHeading from '../SubHeading';

interface Props {
  title4: string;
  content4: JSX.Element;
  buttonText4?: string;
  href4?: string;
}

const GridCard4: FC<Props> = ({ title4, content4, buttonText4, href4 }) => {
  return (
    <div className="card-compact  rounded-md bg-base-300 shadow-xl">
      <div className="card-body">
        <div className="card-title m-auto">
          <SubHeading title={title4} />
        </div>
        <div className="text-base-300">{content4}</div>
        {buttonText4 && href4 && (
          <div className="card-actions justify-end">
            <Link href={href4} passHref>
              <a className="bg-button text-buttonText hover:bg-buttonText hover:text-button btn">
                {buttonText4}
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard4;
