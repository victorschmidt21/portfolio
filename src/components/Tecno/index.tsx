import { SiTypescript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TecnoIcons } from "../TecnoIcons";
const tecnoIcons = [
  {
    name: "Javascript",
    icons: DiJavascript,
  },
  {
    name: "Typescript",
    icons: SiTypescript,
  },
  {
    name: "NodeJS",
    icons: FaNodeJs,
  },
  {
    name: "React",
    icons: FaReact,
  },
  {
    name: "TailwindCss",
    icons: RiTailwindCssLine,
  },
  {
    name: "NextJS",
    icons: SiNextdotjs,
  },
];
export function Tecno() {
  return (
    <div className="md:flex justify-center items-center gap-10 mt-10 md:mt-20 grid grid-cols-3">
      {tecnoIcons.map((iten) => (
        <TecnoIcons name={iten.name} icon={iten.icons} />
      ))}
    </div>
  );
}
