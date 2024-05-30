/* eslint-disable prettier/prettier */

import vine, { SimpleMessagesProvider }  from "@vinejs/vine"

export const createAlunoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2),
    idade: vine.number().positive().withoutDecimals().range([5,200]),
    periodo: vine.string().trim().escape().maxLength(100).minLength(2),
    estado: vine.number().range([0,1]),
  }),
)

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'O campo {{ field }} é obrigatório',
  'string': 'O campo {{ field }} deve ser do tipo string',
  'escape': 'Caracteres invalidos',
  'maxLength' : 'O campo {{field}} permite no maximo 100 caracteres',
  'minLength' : 'O campo {{field}} deve conter minimo 2 caracteres',
  // Error message for the username field
  //'username.required': 'Please choose a username for your account',
})


export const updateAlunoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().escape().maxLength(100).minLength(2),
        idade: vine.number().positive().withoutDecimals().range([5,200]),
        periodo: vine.string().trim().escape().maxLength(100).minLength(2),
        estado: vine.number().range([0,1]),
      })
)