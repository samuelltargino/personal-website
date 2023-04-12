interface Data{
  name: string,
  email: string,
  subject: string,
  phone: string,
  message: string,
}

const validateInputs = (formData:Data) => {

  interface Errors{
    [key: string]:{}
  }

  const errors:Errors = {};
  const errorMessage = "Por favor, preencha este campo";

  interface ItemsWithError {
    [key: string]: {
      field: string;
      label: string;
    };
  }
  

  const itemsWithError:ItemsWithError = {};

  if (!formData.name) {
    itemsWithError.name = {
      field: "input-error",
      label: "label-error",
    };
    errors.name = errorMessage;
  } else if (formData.name) {
    itemsWithError.name = {
      field: "initial",
      label: "initial",
    };
  }

  if (!formData.email) {
    itemsWithError.email = {
      field: "input-error",
      label: "label-error",
    };
    errors.email = errorMessage;
  } else if (formData.email) {
    itemsWithError.email = {
      field: "initial",
      label: "initial",
    };
  }
  if (!formData.subject) {
    itemsWithError.subject = {
      field: "input-error",
      label: "label-error",
    };
    errors.subject = errorMessage;
  } else if (formData.subject) {
    itemsWithError.subject = {
      field: "initial",
      label: "initial",
    };
  }

  if (!formData.phone) {
    itemsWithError.phone = {
      field: "input-error",
      label: "label-error",
    };
    errors.phone = errorMessage;
  } else if (formData.phone) {
    itemsWithError.phone = {
      field: "initial",
      label: "initial",
    };
  }

  if (!formData.message) {
    itemsWithError.message = {
      field: "input-error",
      label: "label-error",
    };
    errors.message = errorMessage;
  } else if (formData.message) {
    itemsWithError.message = {
      field: "initial",
      label: "initial",
    };
  }

  return { errors, itemsWithError };
};

export default validateInputs;
