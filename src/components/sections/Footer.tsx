import Image from "next/image";
import Logo2 from "../header/Logo2";
import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Pin from "../icons/Pin";
import WhatsAppIcon from "../icons/Whatsapp";

export function Footer() {
  return (
    <div className="flex flex-col lg:flex-row  justify-between lg:px-[50px] lg:pt-[20px] pb-4 lg:pb-0 px-2 bg-[#004482]">
      <div className="flex items-center justify-center lg:w-1/4">
        <Logo2 fill={`#ffff`} />
      </div>

      <div className="justify-center flex flex-col items-center lg:items-start ml-4 lg:ml-10">
        <a href="https://maps.app.goo.gl/e3NwKtdZE6ATn8219" target="_blank">
          <div className="flex gap-2">
            <Pin />
            <h1 className="text-xl font-bold">
              Av. João Durval Carneiro, 3496 - Caseb - Feira de Santana/BA
            </h1>
          </div>
        </a>
      </div>
      {/* <div className="w-[250px] justify-center items-center flex-col pt-2 hidden lg:flex">
          <a href="https://maps.app.goo.gl/e3NwKtdZE6ATn8219" target="_blank">
            <div>
              <img
                src="maps2.png"
                alt=""
                className="lg:w-[200px] w-[200px] mt-6 lg:mt-0 rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </a>
        </div> */}
      <div className="flex items-center justify-center flex-col gap-4 lg:w-2/5 ">
        <div className="flex items-center justify-center gap-7 lg:w-1/5">
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
            className="mt-1"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://wa.me/5575983315441"
            target="_blank"
            className="mt-1"
          >
            <WhatsAppIcon />
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">© 2024- Evolução Contabilidade.</h1>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-sm font-bold">CNPJ: 42.752.879/0001-78</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
