/* eslint-disable prettier/prettier */


import vine, { SimpleMessagesProvider }  from "@vinejs/vine"

vine.messagesProvider = new SimpleMessagesProvider({
 
  'required': 'O campo {{ field }} é obrigatório',
  'string': 'O campo {{ field }} deve ser do tipo string',
  'escape': 'Caracteres invalidos',
  'maxLength' : 'O campo {{field}} permite no maximo {{max}} caracteres',
  'minLength' : 'O campo {{field}} deve conter minimo {{min}} caracteres',
  'withoutDecimals': 'o campo {{field}} não deve conter virgulas',
  'positive': 'o campo {{field}} não deve ser negativo',
  'number': 'O Campo {{field}} deve ser um numero',
  'range': 'O Campo {{field}} deve estar no intervalo de {{min}} á {{max}}'
  
})

export const createAlunoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2),
    idade: vine.number().positive().withoutDecimals().range([5,200]),
    periodo: vine.string().trim().escape().maxLength(100).minLength(2),
    estado: vine.number().range([0,1]),
  }),
)


export const updateAlunoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().escape().maxLength(100).minLength(2),
        idade: vine.number().positive().withoutDecimals().range([5,200]),
        periodo: vine.string().trim().escape().maxLength(100).minLength(2),
        estado: vine.number().range([0,1]),
      })
)

