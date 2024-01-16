import Ambitious from "@/components/Ambitious";
import { Button } from "@/components/ui/button";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Projects from "@/containers/Projects";
import Services from "@/containers/Services";

export default function Home() {
  return (
    <main className=" text-white min-h-screen mt-20">
      <section id="hero" className="grid lg:grid-cols-3 justify-center">
        <div className="lg:col-span-2 flex flex-col gap-8 px-2 lg:pl-32">
          <div className="px-4 py-2 bg-gradient-to-br from-[#272727] to-[#11101D] rounded-lg font-poppins text-2xl w-fit">
            <div className="flex items-center gap-2">
              <img src="/assets/imgs/Discount.svg" alt="" />
              <span>20% DISCOUNT FOR THE FIRST PROJECT</span>
            </div>
          </div>
          <div className="relative">
            <div className="lg:absolute border-2 border-clementine rounded-full flex w-24 h-24 right-24 hover:text-clementine hover:border-gray-300 hover:cursor-pointer">
              <div className="m-auto">
                Get &#8599;
                <br /> Started
              </div>
            </div>
            <h1 className="lg:text-6xl">
              The Next <br />
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-[#f7bd91] to-[#EE7214]">
                Generation
              </span>{" "}
              <br /> Payment Method.
            </h1>
          </div>
          <p className="font-poppins text-2xl">
            Our team of experts uses a methodology to identify
            <br /> the credit cards most likely to fit your needs.
            <br /> We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="lg:col-span-1 relative">
          <img
            src="../assets/imgs/bighand.png"
            alt="roya"
            className="absolute top-10 left-36"
          />
          <img
            src="../assets/imgs/meduimhand.png"
            alt="roya"
            className="absolute bottom-60 right-48"
          />
          <img
            src="../assets/imgs/smallhand.png"
            alt="roya"
            className="absolute bottom-60 left-56"
          />
          <div className="">
            <img src="../assets/imgs/slider.svg" alt="Roya-Slider" />
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Projects />
      <Ambitious />
      <Contact />
    </main>
  );
}
