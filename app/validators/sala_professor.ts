import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  required: 'O campo {{ field }} é obrigatório',
  number: 'O Campo {{field}} deve ser um numero',
})

export const createSalaProfessorValidator = vine.compile(
  vine.object({
    professor_id: vine.number(),
    sala_professor_id: vine.number(),
    estado: vine.number(),
  })
)

export const updateSalaProfessorVaValidator = vine.compile(
  vine.object({
    professor_id: vine.number(),
    sala_professor_id: vine.number(),
    estado: vine.number(),
  })
)
