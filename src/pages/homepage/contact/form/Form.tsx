import React, { useState, forwardRef } from "react";
import Button from "../../../../components/button/Button";
import validateInputs from './validation/validateInputs'
import { PatternFormat, PatternFormatProps} from 'react-number-format'
import { ChevronRight } from "react-feather";
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { z } from 'zod'
interface FormProps{
    setTheMessageWasSent: (value: boolean) => void
}

type userContactFormData = z.infer<typeof validateInputs>

const PhoneNumber = forwardRef((props: PatternFormatProps, ref: React.Ref<any>) => (
  <PatternFormat {...props} getInputRef={ref} />
));


const Form = (props:FormProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  }
    = useForm<userContactFormData>({
    resolver: zodResolver(validateInputs)
  })

  const sendEmail = (data: any) => {
    console.log(data)
    // event.preventDefault();
    // setErrors(validateInputs(formData).errors);
    // setErrorClassName(validateInputs(formData).itemsWithError);

  };

  return (
    <>
      <h3 className="contact__display" data-aos="fade-up">
        Estou aguardando o seu contato, deixe uma mensagem {"\u{1F44B}"}
      </h3>

      <form 
      className="contact__form" 
      onSubmit={handleSubmit(sendEmail)}
      autoComplete="off"
      >
        <div
         className="contact__form__container"
         data-aos="fade-up"
         >
          <div className="contact__form__input-container name">
            <label
              id="label-name"
              htmlFor="name"
            >
              Nome completo
            </label>
            <input
              id="name"
              className={errors.name ? 'input-error' : ""}
              type="text"
              placeholder="Samuell Targino"
              {...register('name')}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className="contact__form__input-container email">
            <label
              id="label-email"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={errors.email ? 'input-error' : ""}
              id="email"
              type="email"
              placeholder="nome@exemplo.com"
              {...register('email')}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
        </div>
        <div className="contact__form__container" data-aos="fade-up">
          <div className="contact__form__input-container subject">
            <label
              id="label-subject"
              htmlFor="subject"
            >
              Assunto
            </label>
            <input
              className={errors.subject ? 'input-error' : ""}
              id="subject"
              type="text"
              placeholder="Criação de website"
              {...register('subject')}
            />
            {errors.subject && <span className="error">{errors.subject.message}</span>}
          </div>
          <div className="contact__form__input-container phone">
            <label
              id="label-phone"
              htmlFor="phone"
            >
              Telefone
            </label>
            <PhoneNumber
              id="phone phone-number"
              className={errors.phone ? 'input-error' : ""}
              type="tel"
              placeholder="(99) 9 9999-9999"
              format="(##) # ####-####"
              mask="_"
              {...register('phone')}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>
        </div>

        <div
          className="contact__form__input-container message"
          data-aos="fade-up"
        >
          <label
            id="label-message"
            htmlFor="message"
          >
            Mensagem
          </label>
          <textarea
            className={errors.message ? 'input-error' : ""}
            id="message"
            placeholder="Olá, tudo bem? Espero que sim..."
            {...register('message')}
          ></textarea>
          {errors.message && <span className="error">{errors.message.message}</span>}
        </div>

        <Button
          type="submit"
          text={"enviar mensagem"}
          icon={ChevronRight}
          // event={() => props.setTheMessageWasSent(true)}
        ></Button>
      </form>
    </>
  );
};

export default Form;
