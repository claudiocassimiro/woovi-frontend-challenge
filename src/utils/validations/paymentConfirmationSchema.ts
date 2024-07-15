import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("O nome completo é obrigatório"),
  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, "CPF Inválido"),
  cardNumber: yup
    .string()
    .required("O número do cartão é obrigatório")
    .matches(
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
      "Número de cartão inválido"
    ),
  expiry: yup
    .string()
    .required("A data de vencimento é obrigatória")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "A data deve seguir o formato 22/04"),
  cvv: yup
    .string()
    .required("O CVV é obrigatório")
    .matches(/^[0-9]{3}$/, "CVV Inválido"),
});
