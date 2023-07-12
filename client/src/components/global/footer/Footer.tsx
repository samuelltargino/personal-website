import { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [titleProp, setTitleProp] = useState(
    `Copiar email ${String.fromCharCode(0x2709)}`
  );

  const handleCopyEmailToClipboard = () => {
    navigator.clipboard.writeText(`samuelltargino@gmail.com`).then(() => {
      const fire = String.fromCharCode(0x270c);
      setTitleProp(`Email copiado com sucesso! ${String.fromCharCode(0x270c)}`);
      setTimeout(() => {
        setTitleProp(`Copiar email ${String.fromCharCode(0x2709)}`);
      }, 3000);
    });
  };

  return (
    <div className="footer">
      <div className="works__divider line" data-aos={"fill-in"}></div>
      <div className="footer__container">
        <div className="social-links" data-aos="fade-up">
          <label htmlFor="" className="social-links__label">
            Redes sociais
          </label>
          <div className="social-links__links-container">
            <a
              href="https://www.instagram.com/samuelltargino_/"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/samuelltargino/"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Linkedin
            </a>
            <a
              href="https://dribbble.com/samuelltargino"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="footer__contact" data-aos="fade-up">
          <label htmlFor="">Contato</label>
          <p
            className="footer__contact__email"
            title={titleProp}
            onClick={() => {
              handleCopyEmailToClipboard();
              navigator.clipboard.writeText("samuelltargino.dev@gmail.com");
            }}
          >
            samuelltargino.dev@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
