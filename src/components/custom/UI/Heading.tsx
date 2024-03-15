// src/Components/UI/Heading.tsx
'use client';
import React, { FC } from 'react';

interface Props {
  title: string;
  iconClass?: string;
}

// Function to convert text to title case
const toTitleCase = (text: string): string =>
  text.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

const Heading: FC<Props> = ({ title, iconClass }): JSX.Element => {
  const titleCaseText = toTitleCase(title);

  return (
    <h1 className="font-poppins m-2 flex items-center justify-center text-center text-3xl font-bold">
      {iconClass && <i className={`${iconClass} mr-2`} />}
      {titleCaseText}
    </h1>
  );
};

export default Heading;
