import React from "react";
import Form from "./form/Form";
import Footer from "../../../components/footer/Footer";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h3 className="contact__display" data-aos="fade-up">
          Estou aguardando o seu contato, deixe uma mensagem {"\u{1F44B}"}
        </h3>

        <Form></Form>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default Contact;
