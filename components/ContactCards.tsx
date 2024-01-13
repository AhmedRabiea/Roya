import React from "react";

type ContactProps = {
  icon: string;
  title: string;
  content: string;
  method: string;
};

const ContactCards = ({ icon, title, content, method }: ContactProps) => {
  return (
    <div className="flex flex-col gap-4 border-2 rounded-lg border-clementine p-5">
      <img src={icon} alt="roya-icon" className="w-20 h-20" />
      <h1>{title}</h1>
      <p className="text-gray-400">{content}</p>
      <p className="text-gray-400">{method}</p>
    </div>
  );
};

export default ContactCards;
