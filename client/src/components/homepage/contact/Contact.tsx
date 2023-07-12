import { useEffect, useState } from "react";
import Form from "./form/Form";
import FormFeedback from "./form/form-feedback/FormFeedback";
import Footer from "../../global/footer/Footer";
import AOS from "../../../aos";
import "./Contact.scss";

const Contact = () => {
  const [theMessageWasSent, setTheMessageWasSent] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [theMessageWasSent]);

  function handleCheckIfMessageWasSent(state: boolean) {
    setTheMessageWasSent(state);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {!theMessageWasSent ? (
          <Form setTheMessageWasSent={handleCheckIfMessageWasSent} />
        ) : (
          <FormFeedback setTheMessageWasSent={handleCheckIfMessageWasSent} />
        )}
      </div>

      <Footer></Footer>
    </section>
  );
};

export default Contact;
