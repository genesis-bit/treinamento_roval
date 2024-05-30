import vine, { SimpleMessagesProvider } from '@vinejs/vine'



vine.messagesProvider = new SimpleMessagesProvider({
    
    'required': 'O campo {{ field }} é obrigatório',
    'number': 'O Campo {{field}} deve ser um numero',
  })
  
  export const createTurmaAlunoValidator = vine.compile(
    vine.object({
      aluno_id: vine.number(),
      turma_id: vine.number(),
      estado: vine.number(),
    }),
  )
  
  
  export const updateTurmaAlunoValidator = vine.compile(
      vine.object({
        aluno_id: vine.number(),
        turma_id: vine.number(),
        estado: vine.number(),
    })
  )