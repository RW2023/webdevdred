import Link from 'next/link';
import { FC } from 'react';

import LightSubHeading from '../LightSubHeading';

interface Props {
  title2: string;
  content2: JSX.Element;
  href1?: string;
  href2?: string;
  buttonText2?: string;
}

const GridCard2: FC<Props> = ({ title2, content2, buttonText2, href2 }): JSX.Element => {
  return (
    <div className="card-compact card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title m-auto">
          <LightSubHeading title={title2} />
        </div>
        {content2}
        {buttonText2 && href2 && (
          <div className="card-actions justify-end">
            <Link href={href2}>
              <button
                type="button"
                className="bg-button text-buttonText hover:bg-buttonText hover:text-button btn"
              >
                {buttonText2}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard2;
