import React from "react";
import { Button } from "./ui/button";
import { FaRegStar } from "react-icons/fa";

type ProjectsProps = {
  img: string;
  title: string;
  content: string;
};

const ProjectsCards = ({ img, title, content }: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={img} alt="Roya-Projects" className="w-full object-fill" />
      <h1>{title}</h1>
      <p className="text-clementine">By| Ro&apos;ya</p>
      <p className="text-gray-300">{content}</p>
      <div className="flex justify-between items-center">
        <Button>Know More</Button>
        <FaRegStar />
      </div>
    </div>
  );
};

export default ProjectsCards;
