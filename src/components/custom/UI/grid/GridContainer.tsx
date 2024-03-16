import { FC } from 'react';

import Heading from '../Heading';
import GridCard1 from './GridCard1';
import GridCard2 from './GridCard2';
import GridCard3 from './GridCard3';
import GridCard4 from './GridCard4';

interface Props {
  pageTitle: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  content1: JSX.Element;
  content2: JSX.Element;
  content3: JSX.Element;
  content4: JSX.Element;
  buttonText1?: string;
  buttonText2?: string;
  buttonText3?: string;
  buttonText4?: string;
  href1?: string;
  href2?: string;
  href3?: string;
  href4?: string;
}
const GridContent: FC<Props> = ({
  pageTitle,
  title1,
  title2,
  title3,
  title4,
  content1,
  content2,
  content3,
  content4,
  buttonText1,
  buttonText2,
  buttonText3,
  buttonText4,
  href1,
  href2,
  href3,
  href4,
}): JSX.Element => {
  return (
    <>
      <div className="mx-auto  my-2 w-full rounded bg-base-100 md:w-1/2">
        {' '}
        <Heading title={pageTitle} />
      </div>
      <div className="m-auto mx-2 my-2 grid gap-4 md:grid-cols-2">
        <GridCard1 title1={title1} content1={content1} buttonText1={buttonText1} href1={href1} />
        <GridCard2 title2={title2} content2={content2} buttonText2={buttonText2} href2={href2} />
        <GridCard3 title3={title3} content3={content3} buttonText3={buttonText3} href3={href3} />
        <GridCard4 title4={title4} content4={content4} buttonText4={buttonText4} href4={href4} />
      </div>
    </>
  );
};

export default GridContent;
