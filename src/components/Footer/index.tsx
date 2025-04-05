import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PhoneCall } from "lucide-react";
import { RefObject } from "react";

interface FooterProps {
  homeRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  portfolioRef: RefObject<HTMLElement | null>;
}

const scrollToSection = (ref: any) => {
  if (ref?.current) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
};

export function Footer({ homeRef, aboutRef, portfolioRef }: FooterProps) {
  const classSocials =
    "p-3 border-2 border-[#575757] rounded-full text-[#BABABA] cursor-pointer hover:scale-105 hover:border-white";
  const classTexts =
    "cursor-pointer hover:scale-105";
  return (
    <footer className="bg-[#393939] flex flex-col justify-center items-center mt-30">
      <div className="text-[#FA6E00] text-3xl font-bold mt-5">
        <h1>LOGO</h1>
      </div>
      <div className="gap-5 flex text-white mt-5">
        <h2 onClick={()=> scrollToSection(homeRef)} className={classTexts}>Home</h2>
        <h2 onClick={()=> scrollToSection(aboutRef)} className={classTexts}>Sobre mim</h2>
        <h2 onClick={()=> scrollToSection(portfolioRef)} className={classTexts}>Portfólio</h2>
      </div>
      <div className="flex gap-5 justify-center mt-5">
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
      <div className="flex mt-5 gap-5">
        <MdOutlineEmail size={28} color={"#fff"} />
        <span className="text-white">victorschmidt21@outlook.com</span>
      </div>
      <div className="flex mt-5 gap-5">
        <PhoneCall size={28} color={"#fff"} />
        <span className="text-white">45 9 9965-8439</span>
      </div>
      <hr className="mt-5 text-[#fff] w-11/12" />
      <span className="my-3 text-white">
        © 2025 Victor Schmidt - Todos os direitos reservados.
      </span>
    </footer>
  );
}
