import { CheckSquare, CornerUpLeft } from "react-feather";
import Button from "../../../../global/button/Button";

interface FormProps {
  setTheMessageWasSent: (value: boolean) => void;
}

const FormFeedback = (props: FormProps) => {
  return (
    <div className="feedback-container">
      <label className="feedback-tag" data-aos="fade-up">
        <CheckSquare size={20} className="feedback-icon" />
        Feedback do contato
      </label>

      <h1 className="feedback-title" data-aos="fade-up">
        Muito obrigado pelo contato!
      </h1>

      <p className="feedback-text" data-aos="fade-up">
        Sua mensagem foi enviada com sucesso! Muito em breve estarei te
        retornando
      </p>

      <Button
        text={"Enviar outra mensagem"}
        icon={CornerUpLeft}
        event={() => props.setTheMessageWasSent(false)}
      ></Button>
    </div>
  );
};

export default FormFeedback;
