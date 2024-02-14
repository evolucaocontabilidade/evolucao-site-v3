import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import WhatsAppIcon from "../icons/Whatsapp";
import Mail from "../icons/Mail";

export function Dropdown(props: any) {
  const nodeRef = useRef(null);

  return (
    <div className="flex flex-col justify-between items-center h-[80%] ">
      <div className="flex flex-col gap-12">
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#empresa" className=" flexjustify-centerr ">
              <span className="text-white font-bold">empresa</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#solucoes" className=" flexjustify-centerr ">
              <span className="text-white font-bold">soluções</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#depoimentos" className="flex justify-center">
              <span className="text-white font-bold">depoimentos</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#contato" className="flex justify-center">
              <span className="text-white font-bold">contato</span>
            </a>
          </button>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-center gap-7 my-4">
          <a
            href="mailto:contato@evolucaocontabilidade.org "
            target="_blank"
            className="mr-3"
          >
            <Mail />
          </a>
          <a
            href="https://www.instagram.com/evolucaocontabilidadee/"
            target="_blank"
          >
            <InstagramIcon fill="#ffffff" />
          </a>
          <a href="https://wa.me/5575983315441" target="_blank">
            <WhatsAppIcon fill="#ffffff" />
          </a>
        </div>
        <p className="text-white font-bold text-lg">
          © 2024 — @evolucaocontabilidadee
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
