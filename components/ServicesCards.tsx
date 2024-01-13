import { cn } from "@/lib/utils";
import React from "react";

type SeriveCardsProps = {
  icon: string;
  title: string;
  content: string;
};

const ServicesCards = ({ icon, title, content }: SeriveCardsProps) => {
  return (
    <div
      className={cn(
        "border-2 rounded-lg border-clementine p-5 flex flex-col gap-4 items-center text-center mt-10"
      )}
    >
      <img
        src={icon}
        alt="roya-cards"
        className="w-20 h-20 flex justify-center"
      />

      <h1 className="text-lg lg:text-2xl">{title}</h1>
      <p className="text-sm lg:text-lg text-gray-300">{content}</p>
    </div>
  );
};

export default ServicesCards;
