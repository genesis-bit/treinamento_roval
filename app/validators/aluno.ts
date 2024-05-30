/* eslint-disable prettier/prettier */

import vine from "@vinejs/vine"

export const createAlunoValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2),
    idade: vine.number().positive().withoutDecimals().range([5,200]),
    sala: vine.string().trim().escape(),
    turma: vine.string().trim().escape().maxLength(100).minLength(2),
    periodo: vine.string().trim().escape().maxLength(100).minLength(2),
    endereco: vine.string().trim().escape().maxLength(250).minLength(2),
    estado: vine.number(),
  }),
)

export const messeges = {
  string: '{{ field }} deve ser uma string',
  number: '{{ field }} deve ser um número',
  minLength: '{{ field }} '
}

//const messeges = {
  //string: '{{ field }} deve'
//}


export const updateAlunoValidator = vine.compile(
    vine.object({
        nome: vine.string().trim().escape().maxLength(100).minLength(2),
        idade: vine.number().positive().withoutDecimals().range([5,200]),
        sala: vine.string().trim().escape().maxLength(100).minLength(2),
        turma: vine.string().trim().escape().maxLength(100).minLength(2),
        periodo: vine.string().trim().escape().maxLength(100).minLength(2),
        endereco: vine.string().trim().escape().maxLength(100).minLength(2),
        estado: vine.number(),
      })
)