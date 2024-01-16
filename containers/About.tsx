import AboutCards from "@/components/AboutCards";
import { Button } from "@/components/ui/button";
import React from "react";
import { HiPaperAirplane, HiShieldCheck, HiStar } from "react-icons/hi";

const About = () => {
  const features = [
    {
      Icon: <HiStar />,
      title: "Ideation",
      content: "Conducting Product Discovery and Product Research",
    },
    {
      Icon: <HiShieldCheck />,
      title: "100% Secure",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      Icon: <HiPaperAirplane className="rotate-45" />,
      title: "Maintenance",
      content: "Co-managing the app with your technology team",
    },
  ];
  return (
    <section id="aboutus" className="mt-36 container mx-auto">
      <h1 className="lg:text-5xl text-center">About Us</h1>
      <div className="grid lg:grid-cols-5 gap-5 lg:gap-10 mt-14">
        <div className="lg:col-span-3 flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-clementine">About Ro&apos;ya</h2>
            <p>
              Welcome to <span className="text-clementine">Ro&apos;ya</span>,
              where technology meets precision and affordability. <br />
              We specialize in delivering cutting-edge solutions with a
              commitment to timely project completion.
              <br />
            </p>
          </div>
          <p>
            Our team&apos;s passion and expertise ensure your business stays
            ahead in the ever-evolving tech landscape.
            <br /> Experience excellence, punctuality, and cost-effectiveness –
            welcome to the forefront of innovation with Ro&apos;ya.
          </p>
          <Button variant="getStarted">Get Started &#8599;</Button>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-1 lg:gap-4">
          {features.map((feature) => (
            <AboutCards
              key={feature.title}
              Icon={feature.Icon}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
