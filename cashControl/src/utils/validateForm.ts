import * as Yup from "yup";

export const schema = Yup.object().shape({
    name:Yup.string()
      .required("Nome é Obrigatório"),

    amount: Yup.number()
      .required("Valor é obrigatório")
      .typeError("Informe um valor numérico")
      .positive("Informe somente números positivos")
})

export const categoryData ={
    key: "category",
    name: "Categoria",
  }