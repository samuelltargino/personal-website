import "../../../styles/styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__text">
        <h3 className="about__tag" data-aos="fade-up">
          Sobre
        </h3>
        <div className="about__description">
          <h3 className="about__title" data-aos="fade-up">
            De ideias a realidade: moldando o digital com arte e tecnologia
          </h3>
          <p
            className="about__paragraph"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Seja bem-vindo ao meu espaço digital! Eu sou apaixonado por
            transformar ideias em soluções criativas e impactantes. Acredito que
            a combinação da arte e tecnologia nos permite criar experiências
            digitais únicas que superam as expectativas.
            <br />
            <br />A minha abordagem é personalizada e focada nas necessidades
            específicas de cada projeto. Se você está em busca de um parceiro
            criativo e confiável para o seu projeto, você está no lugar certo.
            Vamos trabalhar juntos e dar vida às suas ideias!
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
            Com habilidades em programação, desenvolvo soluções avançadas e
            personalizadas, elevando a presença online de qualquer marca à um
            novo patamar.
          </p>
        </div>
        <div className="interface-design service">
          <h4 className="interface-design title" data-aos="fade-up">
            Design de interfaces
          </h4>
          <p className="interface-design text" data-aos="fade-up">
            Combinando minha paixão por design de interfaces e anos de
            experiência, transformo ideias complexas em soluções elegantes e
            fáceis de usar.
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
};

export default About;
