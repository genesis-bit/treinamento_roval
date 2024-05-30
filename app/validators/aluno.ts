/* eslint-disable prettier/prettier */

import vine, { SimpleMessagesProvider } from "@vinejs/vine"

export const createAlunoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2),
    idade: vine.number().positive().withoutDecimals().range([5,200]),
    periodo: vine.string().trim().escape().maxLength(100).minLength(2),
    estado: vine.number(),
  }),
)

const messages = {
  number: ' {{ field }} deve ser um número',
  min: '{{ field }} deve ter no minímo {{ min }} carateres',
  max: 'The {{ field }} deve ter no máximo {{ max }} carateres',
  range: '{{ field }} deve estar no intervalo de  {{ min }} e {{ max }}',
  withoutDecimals: '{{ field }} não pode ter casa decimal',
}

vine.messagesProvider = new SimpleMessagesProvider(messages)




export const updateAlunoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().escape().maxLength(100).minLength(2),
        idade: vine.number().positive().withoutDecimals().range([5,200]),
        periodo: vine.string().trim().escape().maxLength(100).minLength(2),
        estado: vine.number(),
      })
)