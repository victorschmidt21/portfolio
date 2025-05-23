import projectVTFLIX from "../../public/images/projectVTFLIX.png";
import projectVenturini from "../../public/images/projectVenturini.png";
import projectCriptoApp from "../../public/images/projectCriptoApp.png";
import projectShopDEV from "../../public/images/projectShopDEV.png";
interface ProjectProps {
  name: String;
  linkGit: string;
  linkSite: string;
  img: any;
}

export const projects = <ProjectProps[]>[
  {
    name: "Venturini Consórcios - LP",
    linkGit: "https://github.com/victorschmidt21/venturini-consorcios",
    linkSite: "https://venturini-consorcios.vercel.app/ ",
    img: projectVenturini,
  },
  {
    name: "VTFLIX - Filmes",
    linkGit: "https://github.com/victorschmidt21/VTFLIX_Filmes",
    linkSite: "https://vtflix.vercel.app/",
    img: projectVTFLIX,
  },
  {
    name: "CRIPTOAPP",
    linkGit: "https://github.com/victorschmidt21/projetoCripto",
    linkSite: "https://projeto-cripto-rho.vercel.app/",
    img: projectCriptoApp,
  },
  {
    name: "SHOPDEV - Ecommerce",
    linkGit: "https://github.com/victorschmidt21/shopdevEcommecer",
    linkSite: null,
    img: projectShopDEV,
  },
];
