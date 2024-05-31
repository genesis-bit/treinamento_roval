import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
    
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O campo {{ field }} deve ser do tipo string',
    'escape': 'Caracteres invalidos',
    'maxLength' : 'O campo {{field}} permite no maximo {{max}} caracteres',
    'minLength' : 'O campo {{field}} deve conter minimo {{min}} caracteres',
    'number': 'O Campo {{field}} deve ser um numero',
    'range': 'O Campo {{field}} deve estar no intervalo de {{min}} á {{max}}', 
    unique: ' {{ field }} já existe', 
    'regex': '{{ field }} não pode conter carateres especiais'
  })
  
  export const createCursoValidator = vine.compile(
    vine.object({
        codigo: vine.string().trim().escape().maxLength(100).minLength(2).alphaNumeric(),
        nome: vine.string().trim().escape().maxLength(100).minLength(2).regex(/^[a-zA-Z0-9]+$/),
        descricao: vine.string().trim().escape().maxLength(100).minLength(2).optional(),
       estado: vine.number().range([0,1]),
    }),
  )
  
  
  export const updateCursoValidator = vine.compile(
      vine.object({
        codigo: vine.string().trim().escape().maxLength(100).minLength(2).alphaNumeric(),//.unique(),
        nome: vine.string().trim().escape().maxLength(100).minLength(2).regex(/^[a-zA-Z]+$/),
        descricao: vine.string().trim().escape().maxLength(100).minLength(2).optional(),
        estado: vine.number().range([0,1]),
        })
  )