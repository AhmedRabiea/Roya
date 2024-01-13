import ContactCards from "@/components/ContactCards";
import React from "react";

const Contact = () => {
  const contactCards = [
    {
      icon: "../assets/imgs/email.png",
      title: "Chat With Us",
      content: "Chat with our friendly team",
      method: "Royaco2023@gmail.com",
    },
    {
      icon: "../assets/imgs/phone-call.png",
      title: "Call Us",
      content: "From sun to thr from 10 am to 10 pm",
      method: "+20 106 582 0391",
    },
    {
      icon: "../assets/imgs/visitor.png",
      title: "Visit Us",
      content: "visit and have a nice talk with our team",
      method: "Cairo, Egypt",
    },
  ];
  return (
    <section id="contact" className="mt-20 lg:mt-36">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl text-clementine">- Contact Us</h1>
          <h1 className="text-2xl md:text-5xl">
            <span className="text-clementine">We</span> Would Love To Hear From
            You
          </h1>
          <p className="text-gray-100">Contact Our Friendly Team</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
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
