import ProjectsCards from "@/components/ProjectsCards";
import React from "react";

const Projects = () => {
  const projectsCards = [
    {
      img: "../assets/imgs/almotarjim.png",
      title: "almotarjim Platform",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "http://almotarjim.net/",
    },
    {
      img: "../assets/imgs/qarar.png",
      title: "Qarar Platform",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "https://qarar-nu.vercel.app/",
    },
    {
      img: "../assets/imgs/vega.png",
      title: "Vega Project",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "https://vega-indol.vercel.app/",
    },
    {
      img: "../assets/imgs/qaimna.png",
      title: "Qaimna Project",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "https://qaimna.com/",
    },
    {
      img: "../assets/imgs/sakina.png",
      title: "Sakina Project",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "https://sakina.vercel.app/en",
    },
    {
      img: "../assets/imgs/basira.png",
      title: "Basira Project",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "https://basira.vercel.app/",
    },
    {
      img: "../assets/imgs/aventura.png",
      title: "Aventura Trips",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum ipsam iste exercitationem.",
      href: "http://avventuraeg.net/",
    },
  ];
  return (
    <section id="projects" className="mt-20 lg:mt-36 container">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-xl lg:text-3xl">-Projects</h2>
        <h1 className="text-2xl lg:text-5xl">
          <span className="text-clementine">Ro&apos;ya</span> Projects
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10">
        {projectsCards.map((project) => (
          <ProjectsCards
            key={project.title}
            img={project.img}
            title={project.title}
            content={project.content}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
