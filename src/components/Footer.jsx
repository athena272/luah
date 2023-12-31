import "./Footer.css";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "/media/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="Logo Vivace" width={144} height={144} loading="lazy" />
      <hr className="footer-hr" />
      <div className="footer-info">
        <div className="footer-1">
          <h2>Sobre</h2>
          <span>
            A Luah é uma loja de roupas femininas que acredita em valorizar a
            beleza e o estilo das mulheres. Oferecemos uma variedade de estilos
            para que todas as mulheres possam encontrar roupas para expressar
            sua individualidade. Com preços acessíveis, nossos produtos são de
            qualidade, feitos para durar e criar looks incríveis. Seja moderna,
            casual ou elegante, a Luah tem a peça certa para você.
          </span>
        </div>
        <div className="footer-2">
          <h2>Contato</h2>
          <div>
            <a href="https://www.instagram.com/luahtshirt" target={"_blank"}>
              <BsInstagram size={30} />
            </a>
            <a href="https://wa.me/5579998487269" target={"_blank"}>
              <BsWhatsapp size={30} />
            </a>
            {/* <a href="mailto:vivace.contato01@gmail.com" target={"_blank"}>
              <MdOutlineMailOutline size={30} />
            </a> */}
          </div>
        </div>
      </div>
      <div className="devAutor">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/guigorosario/"
            target={"_blank"}
          >
            Guilherme Rosário
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
