import React from "react";

const SectionHead = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="py-4 space-y-4">
      <h2 className="text-2xl font-bold font-space border-border border-b-2 w-fit">
        {title}
      </h2>
      <p className="font-space">{subTitle}</p>
    </div>
  );
};

export default SectionHead;
