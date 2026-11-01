import React from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h2 className="py-8 text-2xl font-semibold text-slate-900 ">
      {title}
    </h2>
  );
};

export default Heading;