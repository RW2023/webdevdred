import Link from 'next/link';
import { FC } from 'react'; // This import is necessary for FC (Function Component) type

import LightSubHeading from '../LightSubHeading';

interface Props {
  title1: string;
  content1: JSX.Element;
  buttonText1?: string;
  href1?: string;
}

const GridCard1: FC<Props> = ({ title1, content1, buttonText1, href1 }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title m-auto">
          <LightSubHeading title={title1} />
        </div>
        {content1}
        {buttonText1 && href1 && (
          <div className="card-actions justify-end">
            <Link href={href1} passHref>
              <a className="bg-button text-buttonText hover:bg-buttonText hover:text-button btn">
                {buttonText1}
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard1;
