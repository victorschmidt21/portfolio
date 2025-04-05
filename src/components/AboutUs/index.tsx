import imgAbout from "../../../public/images/imgHome.png";
import { RefObject } from "react";

interface AboutUsProps {
  aboutRef: RefObject<HTMLElement | null>;
}
export function AboutUs({aboutRef}: AboutUsProps) {
  return (
    <section className="flex justify-center flex-col items-center mt-60 md:mt-10 text-center md:text-start" ref={aboutRef}>
      <h1 className="text-3xl text-[#FEFEFE] font-semibold mt-20 md:mt-0">
        Sobre mim
      </h1>
      <h3 className="text-lg mt-2 text-[#C6C6C6]">
        Front-end developer focado em performance e usabilidade.
      </h3>
      <div className="flex gap-30 md:mt-20">
        <div className="hidden md:flex">
          <img src={imgAbout} />
        </div>
        <div className="max-w-xl w-full gap-5 space-y-10 tracking-wider m-4">
          <p className="text-[#707070] text-lg text-justify">
            Atualmente, estou cursando Engenharia de Software e atuo na área há
            mais de um ano. Nesse período, desenvolvi diversos projetos, tanto
            em equipe quanto individualmente, adquirindo experiência com React,
            JavaScript, Tailwind CSS e outras tecnologias modernas. Sou
            apaixonado por aprender novas ferramentas que otimizem meu trabalho
            e aprimorem a qualidade das soluções que desenvolvo. Busco
            constantemente me atualizar sobre as melhores práticas do mercado,
            garantindo eficiência e inovação nos meus projetos. Tenho perfil
            proativo e organizado, sempre focado em cumprir meus deveres com
            responsabilidade e dedicação. Minha abordagem colaborativa me
            permite trabalhar bem em equipe, contribuindo para o sucesso dos
            projetos em que estou envolvido.
          </p>
          <a href={imgAbout} download={"curriculoVictorSchmidt.png"}>
            <button className="px-8 py-1 rounded-sm border-2 border-[#FD6F00] bg-[#FD6F00] text-white cursor-pointer hover:scale-105">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
