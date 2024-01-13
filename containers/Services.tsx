import ServicesCards from "@/components/ServicesCards";
import React from "react";

const Services = () => {
  const servicesCards = [
    {
      icon: "../assets/imgs/web-development.png",
      title: "Web Development",
      content: "Creating and maintaining websites or web applications.",
    },
    {
      icon: "../assets/imgs/mobile-development.png",
      title: "Mobile Development",
      content:
        "Creating software applications that run on mobile devices, such as smartphones and tablets.",
    },
    {
      icon: "../assets/imgs/design.png",
      title: "Graphic Design",
      content:
        "Involves visual communication and problem-solving through the use of imagery, typography, color, and other design elements.",
    },
    {
      icon: "../assets/imgs/quality.png",
      title: "Quality Assurance",
      content: "Testing the app and making sure that everything works well",
    },
  ];
  return (
    <section id="services" className="mt-36 container">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-clementine">Our Services</h1>
        <h1 className="text-5xl">
          <span className="text-clementine">Unleash</span> The Power Of Your Own
          Business
        </h1>
        <p className="text-xl">
          Experience the advantages of having your own business!
          <br /> Stay relevant and competitive with our technological skills.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {servicesCards.map((service, idx) => (
          <ServicesCards
            key={service.title}
            icon={service.icon}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
