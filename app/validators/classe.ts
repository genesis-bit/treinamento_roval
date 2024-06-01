import vine, { SimpleMessagesProvider } from '@vinejs/vine'
//import { uniqueRule } from './rules/unique.js'

vine.messagesProvider = new SimpleMessagesProvider({
  required: 'O campo {{ field }} é obrigatório',
  string: 'O campo {{ field }} deve ser do tipo string',
  escape: 'Caracteres invalidos',
  maxLength: 'O campo {{field}} permite no maximo {{max}} caracteres',
  minLength: 'O campo {{field}} deve conter minimo {{min}} caracteres',
  number: 'O Campo {{field}} deve ser um numero',
  range: 'O Campo {{field}} deve estar no intervalo de {{ min }} á {{ max }}',
  unique: ' {{ field }} já existe',
})

export const createClasseValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2), //.unique({ table: 'classes', column: 'nome'}),
    descricao: vine.string().trim().escape().maxLength(100).minLength(2).optional(),
    estado: vine.number().range([0, 1]),
  })
)

export const updateClasseValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().escape().maxLength(100).minLength(2),
    descricao: vine.string().trim().escape().maxLength(100).minLength(2).optional(),
    estado: vine.number().range([0, 1]),
  })
)
