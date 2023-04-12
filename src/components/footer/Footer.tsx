import React from "react";

const Footer = () => {
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
              href="https://dribbble.com/samuelltargino"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com/samuelltargino"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Dribbble
            </a>
            <a
              href="https://dribbble.com/samuelltargino"
              target={"_blank"}
              rel="noreferrer"
              className="social-links__link"
            >
              Behence
            </a>
          </div>
        </div>

        <div className="footer__contact" data-aos="fade-up">
          <label htmlFor="">Contato</label>
          <p className="footer__contact__email">samuelltargino@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
