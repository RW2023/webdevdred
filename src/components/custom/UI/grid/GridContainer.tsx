import { FC } from 'react';

import LightSubHeading from '../LightSubHeading';
import GridCard1 from './GridCard1';
import GridCard2 from './GridCard2';

interface Props {
  pageTitle: string;
  title1: string;
  title2: string;
  content1: JSX.Element;
  content2: JSX.Element;
  buttonText1?: string;
  href1?: string;
  href2?: string;
  buttonText2?: string;
}

const GridContent: FC<Props> = ({
  pageTitle,
  title1,
  title2,
  content1,
  content2,
  buttonText1,
  buttonText2,
  href1,
  href2,
}): JSX.Element => {
  return (
    <>
      <div>
        <LightSubHeading title={pageTitle} />
      </div>
      <div className="m-auto mx-2 my-2 grid gap-4 md:grid-cols-2">
        <GridCard1 title1={title1} content1={content1} buttonText1={buttonText1} href1={href1} />
        <GridCard2 title2={title2} content2={content2} buttonText2={buttonText2} href2={href2} />
      </div>
    </>
  );
};

export default GridContent;
