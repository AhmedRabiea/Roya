import React from "react";

type AboutProps = {
  icon: string;
  title: string;
  content: string;
};

const AboutCards = ({ icon, title, content }: AboutProps) => {
  return (
    <div className="flex gap-8 items-center hover:bg-gradient-to-br from-[#6D6D6D] to-[#11101D] p-5 rounded-lg">
      <div className="p-4 rounded-full bg-[#09977c1a]">
        <img src={icon} alt="roya-features" className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutCards;
