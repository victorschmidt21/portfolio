import { ComponentType, SVGProps } from "react";

interface TecnoIconsProps {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export function TecnoIcons({ name, icon: Icon }: TecnoIconsProps) {
  return (
    <article className="flex justify-center items-center flex-col gap-2">
      <div className="rounded-full p-3 border-6 border-[#FD6F00]">
        <Icon className="text-white w-10 h-10 p-1"/>
      </div>
      <span className="text-[#959595] text-sm">{name}</span>
    </article>
  );
}
