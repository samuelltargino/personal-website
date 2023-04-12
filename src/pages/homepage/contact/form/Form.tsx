import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import { ChevronRight } from "react-feather";
import validateInputs from "./validation/validateInputs";

const Form = () => {
    interface Data{
      name: string,
      email: string,
      subject: string,
      phone: string,
      message: string,
    }

    const [formData, setFormData] = useState<Data>({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });

  const handleSetValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const eventID = event.target.id;
    const eventValue = event.target.value;

    switch (eventID) {
      case "name":
        setFormData((prevData) => ({
          ...prevData,
          name: eventValue,
        }));
        break;

      case "email":
        setFormData((prevData) => ({
          ...prevData,
          email: eventValue,
        }));
        break;

      case "subject":
        setFormData((prevData) => ({
          ...prevData,
          subject: eventValue,
        }));
        break;

      case "phone":
        setFormData((prevData) => ({
          ...prevData,
          phone: eventValue,
        }));
        formatPhone(event as React.ChangeEvent<HTMLInputElement>);
        break;

      case "message":
        setFormData((prevData) => ({
          ...prevData,
          message: eventValue,
        }));
        break;

      default:
        break;
    }
  };


  interface Errors{
    name?: string,
    email?: string,
    subject?: string,
    phone?: string,
    message?: string,
  }

  const [errors, setErrors] = useState<Errors>({  });


  interface ItemsWithError {
    [key: string]: {
      field: string;
      label: string;
    };
  }
  const [errorClassName, setErrorClassName] = useState<ItemsWithError>({});

  const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors(validateInputs(formData).errors);
    setErrorClassName(validateInputs(formData).itemsWithError);

    console.log(errorClassName);
  };

  // Função que formata um número de telefone ao ser digitado no input.

  const [tel, setTel] = useState("");

  const formatPhone = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = e.target.value.replace(/[^\d]/g, "");

    const isMobile = inputPhoneNumber.length <= 11;

    const regex = isMobile
      ? /^(\d{2})(\d{1})(\d{4})(\d{0,4})$/
      : /^(\d{2})(\d{0,1})(\d{0,4})(\d{0,4})$/;

    const formattedPhoneNumber = inputPhoneNumber.replace(
      regex,
      (p1, p2, p3, p4) => {
        const hyphen = p4 ? "-" : "";
        const space = p3 || p2 ? " " : "";

        return `(${p1})${space}${p2}${space}${p3}${hyphen}${p4}`;
      }
    );

    setTel(formattedPhoneNumber);
  };

  return (
    <form className="contact__form" onSubmit={sendEmail} autoComplete="off">
      <div className="contact__form__container" data-aos="fade-up">
        <div className="contact__form__input-container name">
          <label
            className={errorClassName.name ? errorClassName.name.label : ""}
            id="label-name"
            htmlFor=""
          >
            Nome completo
          </label>
          <input
            id="name"
            className={errorClassName.name ? errorClassName.name.field : ""}
            onChange={handleSetValue}
            type="text"
            placeholder="Samuell Targino"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="contact__form__input-container email">
          <label
            className={errorClassName.email ? errorClassName.email.label : ""}
            id="label-email"
            htmlFor=""
          >
            Email
          </label>
          <input
            id="email"
            className={errorClassName.email ? errorClassName.email.field : ""}
            onChange={handleSetValue}
            type="email"
            placeholder="nome@exemplo.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>
      <div className="contact__form__container" data-aos="fade-up">
        <div className="contact__form__input-container subject">
          <label
            className={
              errorClassName.subject ? errorClassName.subject.label : ""
            }
            id="label-subject"
            htmlFor=""
          >
            Assunto
          </label>
          <input
            onChange={handleSetValue}
            id="subject"
            className={
              errorClassName.subject ? errorClassName.subject.field : ""
            }
            type="text"
            placeholder="Criação de website"
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className="contact__form__input-container phone">
          <label
            className={errorClassName.phone ? errorClassName.phone.label : ""}
            id="label-phone"
            htmlFor=""
          >
            Telefone
          </label>
          <input
            onChange={handleSetValue}
            id="phone"
            className={errorClassName.phone ? errorClassName.phone.field : ""}
            type="tel"
            value={tel}
            maxLength={16}
            pattern="\([0-9]{2}\) [0-9]{1} [0-9]{4}-[0-9]{4}"
            placeholder="(99) 9 9999-9999"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
      </div>

      <div
        className="contact__form__input-container message"
        data-aos="fade-up"
      >
        <label
          className={errorClassName.message ? errorClassName.message.label : ""}
          id="label-message"
          htmlFor=""
        >
          Mensagem
        </label>
        <textarea
          onChange={handleSetValue}
          id="message"
          className={errorClassName.message ? errorClassName.message.field : ""}
          placeholder="Olá, tudo bem? Espero que sim..."
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <Button
        type="submit"
        text={"enviar mensagem"}
        icon={ChevronRight}
      ></Button>
    </form>
  );
};

export default Form;
