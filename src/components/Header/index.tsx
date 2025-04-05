import { useState } from "react";
import { IoListSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { RefObject } from "react";

interface HeaderProps {
  homeRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  portfolioRef: RefObject<HTMLElement | null>;
}

const scrollToSection = (ref: any) => {
  if (ref?.current) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
};

export function Header({ homeRef, aboutRef, portfolioRef }: HeaderProps) {
  const classTextHeader =
    "text-[#959595] text-xl hover:text-[#FD6F00] cursor-pointer select-none pr-15 md:pr-0";
  const classTextHome = "text-xl text-[#FD6F00] cursor-pointer select-none";
  const [open, setOpen] = useState(false);

  function onClickList() {
    setOpen(open ? false : true);
  }

  return (
    <div>
      <header
        className="flex justify-between items-center gap-2 mt-5 mx-5 md:mx-20"
        ref={homeRef}
      >
        <div className="md:hidden">
          <IoListSharp size={28} color={"#959595"} onClick={onClickList} />
        </div>
        <div className="text-[#FA6E00] text-3xl font-bold">
          <h1>LOGO</h1>
        </div>
        <div className="hidden gap-15 md:flex">
          <h2
            className={classTextHome}
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </h2>
          <h2
            className={classTextHeader}
            onClick={() => scrollToSection(aboutRef)}
          >
            Sobre mim
          </h2>
          <h2
            className={classTextHeader}
            onClick={() => scrollToSection(portfolioRef)}
          >
            Portfólio
          </h2>
        </div>
      </header>
      {open && (
        <motion.div
          initial={{ y: -4 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute mx-5 shadow-lg p-4 rounded-lg space-y-4 bg-black z-10"
        >
          <h2
            className={classTextHome}
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </h2>
          <h2
            className={classTextHeader}
            onClick={() => scrollToSection(aboutRef)}
          >
            Sobre mim
          </h2>
          <h2
            className={classTextHeader}
            onClick={() => scrollToSection(portfolioRef)}
          >
            Portfólio
          </h2>
        </motion.div>
      )}
    </div>
  );
}
