import React, { ReactNode } from "react";

type AboutProps = {
  Icon: ReactNode;
  title: string;
  content: string;
};

const AboutCards = ({ Icon, title, content }: AboutProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center hover:bg-gradient-to-br from-[#6D6D6D] to-[#11101D] rounded-lg">
      <div className="rounded-full bg-[#09977c1a] p-4 text-4xl text-clementine">
        {Icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutCards;
