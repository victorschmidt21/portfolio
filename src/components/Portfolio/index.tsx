import { BsGithub } from "react-icons/bs";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { RefObject } from "react";
import { projects } from "@/database";
import {  FaEye } from "react-icons/fa";
interface PortfolioProps {
  portfolioRef: RefObject<HTMLElement | null>;
}

export function Portfolio({ portfolioRef }: PortfolioProps) {
  return (
    <section
      className="flex justify-center items-center mt-20 flex-col"
      ref={portfolioRef}
    >
      <h1 className="text-white text-3xl font-semibold">Portfólio</h1>
      <div className="md:grid grid-cols-3 mt-10 gap-10 hidden">
        {projects.map((project) => (
          <article>
            <img src={project.img} />
            <div className="bg-[#575757] py-4 px-4 flex justify-between items-center rounded-b-xl">
              <span className="text-[#C6C6C6] select-none">{project.name}</span>
              <div className="flex gap-8">
                <a
                  href={project.linkGit}
                  target="_blank"
                  className="text-white cursor-pointer hover:scale-110"
                >
                  <BsGithub size={25}/>
                </a>
                {project.linkSite && (
                  <a
                    href={project.linkSite}
                    target="_blank"
                    className="text-white cursor-pointer hover:scale-110"
                  >
                    <FaEye size={25}/>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Carousel className="w-full max-w-sm md:hidden mt-10">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem>
              <article>
                <img src={project.img} />
                <div className="bg-[#575757] py-4 px-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-[#C6C6C6] select-none">{project.name}</span>
                  <div className="flex gap-8">
                    <a
                      href={project.linkGit}
                      target="_blank"
                      className="text-white cursor-pointer hover:scale-110"
                    >
                      <BsGithub size={25}/>
                    </a>
                    {project.linkSite && (
                      <a
                        href={project.linkSite}
                        target="_blank"
                        className="text-white cursor-pointer hover:scale-110"
                      >
                        <FaEye size={25}/>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
