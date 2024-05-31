import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
    'required': 'O campo {{ field }} é obrigatório',
    'range': 'O Campo {{field}} deve estar no intervalo de {{ min }} á {{ max }}', 
    
  })
  
  export const createCursoAlunoValidator = vine.compile(
    vine.object({
        curso_id: vine.number(),
        aluno_id: vine.number(),
        estado: vine.number().range([0,1]),
    }),
  )
  
  export const updateCusrsoAlunoValidator = vine.compile(
      vine.object({
        curso_id: vine.number(),
        aluno_id: vine.number(),
        estado: vine.number().range([0,1]),
      })
  )