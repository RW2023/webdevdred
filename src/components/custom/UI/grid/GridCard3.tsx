import Link from 'next/link';
import { FC } from 'react'; // This import is necessary for FC (Function Component) type

import SubHeading from '../SubHeading';

interface Props {
  title3: string;
  content3: JSX.Element;
  buttonText3?: string;
  href3?: string;
}

const GridCard1: FC<Props> = ({ title3, content3, buttonText3, href3 }) => {
  return (
    <div className="card-compact  rounded-md bg-base-300 shadow-xl">
      <div className="card-body">
        <div className="card-title m-auto">
          <SubHeading title={title3} />
        </div>
        <div className="text-base-300">{content3}</div>
        {buttonText3 && href3 && (
          <div className="card-actions justify-end">
            <Link href={href3} passHref>
              <a className="bg-button text-buttonText hover:bg-buttonText hover:text-button btn">
                {buttonText3}
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard1;
