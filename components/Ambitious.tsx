import React from "react";
import { Button } from "./ui/button";

const Ambitious = () => {
  return (
    <section id="ambitous" className="mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-10 bg-gradient-to-br from-[#6D6D6D] to-[#11101D] rounded-lg p-20 items-center justify-center">
          <div className="col-span-2">
            <h1 className="text-5xl">Let’s try our service now!</h1>
            <p className="text-gray-400 py-5">
              Welcome to <span className="text-clementine">Ro&apos;ya</span>,
              where technology meets precision and affordability. <br />
              We specialize in delivering cutting-edge solutions with a
              commitment to timely project completion.
              <br />
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Button variant="getStarted" className="py-7 px-20">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambitious;
