import React from "react";

// eslint-disable-next-line
import "../../../styles/styles.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__text">
        <h3 className="about__tag" data-aos="fade-up">
          Sobre
        </h3>
        <div className="about__description">
          <h3 className="about__title" data-aos="fade-up">
            De ideias a realidade: moldamos o digital com arte e tecnologia
          </h3>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Seja bem-vindo à Plano de Fundo! Nós somos apaixonados por
            transformar ideias em soluções digitais impactantes. Combinando arte
            e tecnologia podemos moldar o digital e entregar resultados que
            superem as expectativas.
            <br />
            <br />
            Nossa abordagem é personalizada e focada nas necessidades de cada
            projeto. Se você está procurando por soluções criativas e eficientes
            para o seu negócio. Estamos animados para juntar forças e criar algo
            incrível juntos!
          </p>
        </div>
      </div>

      <div className="about__divider line" data-aos="fill-in"></div>

      <div className="services">
        <div className="web-development service">
          <h4 className="web-development title" data-aos="fade-up">
            Desenvolvimento Web
          </h4>
          <p className="web-development text" data-aos="fade-up">
            Com habilidades em programação criamos soluções avançadas e
            personalizadas, elevando a presença online de nossos clientes a um
            novo patamar.
          </p>
        </div>
        <div className="interface-design service">
          <h4 className="interface-design title" data-aos="fade-up">
            Design de interfaces
          </h4>
          <p className="interface-design text" data-aos="fade-up">
            Combinamos nossa paixão e anos de experiência para transformar
            ideias complexas em soluções elegantes e fáceis de usar.
          </p>
        </div>
        <div className="visual-design service">
          <h4 className="visual-design title" data-aos="fade-up">
            Brand Design
          </h4>
          <p className="visual-design text" data-aos="fade-up">
            Desenvolvendo marcas únicas que refletem a personalidade de cada
            projeto. Criando soluções completas que ajudam a construir uma
            presença memorável.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
