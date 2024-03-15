import Link from 'next/link';
import { FC } from 'react'; // This import is necessary for FC (Function Component) type

import SubHeading from '../LightSubHeading';

interface Props {
  title1: string;
  content1: JSX.Element;
  buttonText1?: string;
  href1?: string;
}

const GridCard1: FC<Props> = ({ title1, content1, buttonText1, href1 }) => {
  return (
    <div className="bg-base  card shadow-xl">
      <div className="card-body">
        <div className="card-title m-auto">
          <SubHeading title={title1} />
        </div>
        <div className="text-base-content">{content1}</div>
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
