import { z } from 'zod'

const validateFormSchema = z.object({
  name: z.string()
  .min(3, "O nome deve ter pelo menos 3 caracteres")
  .max(45, "O nome deve ter no máximo 45 caracteres")
  .nonempty("Por favor, preencha este campo")
  .transform(name => (
    name.trim().split(' ').map(word =>(
      word[0].toLocaleUpperCase().concat(word.substring(1))
    )).join(' ')
  )),
  email: z.string()
  .email("Por favor, informe um endereço de email válido.")
  .nonempty("Por favor, preencha este campo")
  .toLowerCase(),
  subject: z.string()
  .nonempty("Por favor, preencha este campo"),
  phone: z.string()
  .regex(/^\(\d{2}\)\s\d\s\d{4}-\d{4}$/,"Digite um número de telefone válido")
  .nonempty("Por favor, preencha este campo"),
  message: z.string()
  .nonempty("Por favor, digite uma mensagem"),
})


export default validateFormSchema