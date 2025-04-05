import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import imgHome from "../../../public/images/imgHome.png";
import Vetor from "../../../public/images/Vector.png";


export function Home() {
  const classSocials =
    "p-3 border-2 border-[#575757] rounded-full text-[#BABABA] cursor-pointer hover:scale-105 hover:border-white";
  return (
    <main className="flex flex-col md:flex-row justify-center items-center md:gap-50 mt-10 md:mt-20">
      <div className="flex justify-center md:items-start">
        <img src={Vetor} />
        <div className="absolute space-y-6 md:mt-20 z-0">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#707070] font-semibold">Olá, eu sou</h4>
            <h3 className="text-[#959595] text-xl font-semibold">
              Victor Schmidt
            </h3>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text">
            Developer Front-End
          </h1>
          <div className="flex gap-5 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/victorschmidt21/"
              target="_blank"
              className={classSocials}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-schmidt-329827300/"
              target="_blank"
              className={classSocials}
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/victorschmidt21"
              target="_blank"
              className={classSocials}
            >
              <BsGithub />
            </a>
          </div>
          <a
            className="flex justify-center md:justify-normal"
            href={imgHome}
            download={"curriculoVictorSchmidt.png"}
          >
            <button className=" cursor-pointer px-8 py-1 rounded-sm border-2 border-[#959595] text-[#959595] hover:border-[#FD6F00] hover:bg-[#FD6F00] hover:text-white">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="absolute top-100 md:relative md:top-0">
        <img src={imgHome} className="p-10" />
      </div>
    </main>
  );
}
