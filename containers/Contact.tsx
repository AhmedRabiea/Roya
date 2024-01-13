import ContactCards from "@/components/ContactCards";
import React from "react";

const Contact = () => {
  const contactCards = [
    {
      icon: "../assets/imgs/email.png",
      title: "Chat With Us",
      content: "Chat with our friendly team",
      method: "roya@gmail.com",
    },
    {
      icon: "../assets/imgs/phone-call.png",
      title: "Call Us",
      content: "fron sun to thr from 10 am to 10 pm",
      method: "+2xxxxxxxxxx",
    },
    {
      icon: "../assets/imgs/visitor.png",
      title: "Visit Us",
      content: "Visit Our Team",
      method: "location",
    },
  ];
  return (
    <section id="contact" className="mt-36">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-clementine">- Contact Us</h1>
          <h1 className="text-5xl">
            <span className="text-clementine">We</span> Would Love To Hear From
            You
          </h1>
          <p className="text-gray-100">Contact Our Friendly Team</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {contactCards.map((data) => (
            <ContactCards
              key={data.title}
              icon={data.icon}
              title={data.title}
              content={data.content}
              method={data.method}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
