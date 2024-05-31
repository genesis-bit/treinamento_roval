 import ClasseAluno from '#models/classe_aluno'
import { createClasseAlunoValidator, updateClasseAlunoValidator } from '#validators/classe_aluno'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ClasseAlunosController {
    /**
  * Display a list of resource
  */
 async index({response}: HttpContext) {
   try {
     const dados = await ClasseAluno.query().preload('aluno').preload('classe')
     return response.json(dados)
     
   } catch (error) {
     console.log(error.message)
     return response.status(404).json({ message: 'Dados não encontrado' })
   }
 }

 /**
  * Display form to create a new record
  */
 async create({}: HttpContext) {}

 /**
  * Handle form submission for the create action
  */
 async store({ request, response }: HttpContext) {

   try {
     const dados = await request.only(['aluno_id', 'classe_id','estado']) 
     const data = await createClasseAlunoValidator.validate(dados)
     let result: any = await ClasseAluno.create(data)
     return response.send({mensagem: 'registada com Sucesso', result})
   } catch (error) {
     console.log(error)
     return response.json({ messege: 'Erro ao Adicionar',  erro: error.messages})
   }
 }

 /**
  * Show individual record
  */
 async show({ params, response }: HttpContext) {    
   let dados: any
   console.log(params.id)
   try {
     if(params.id){
       dados = await ClasseAluno.findOrFail(params.id)
       return response.send(dados)
     }
   } catch (error) {
     console.log(error)
     return response.json({ messege: 'Erro na pesquisa',  erro: error.messages})
     //return response.status(404).json({ message: 'Dados não encontrado' })
   }
 }

 /**
  * Edit individual record
  */
 async edit() {}

 /**
  * Handle form submission for the edit action
  */
 async update({ request, response, params }: HttpContext) {

   let dados: any = await request.only(['aluno_id', 'classe_id','estado']) 
   try {
     const data = await ClasseAluno.findOrFail(params.id)
     if(data){
       const result = await updateClasseAlunoValidator.validate(dados)
       await data.merge(result).save()
       return response.json({ messege: 'Dados actualizado com sucesso',  dados})
     }
   } catch (error) {
     console.log(error)
     return response.json({ messege: 'Erro ao Atualizar',  erro: error.messages})

   }
 }

 /**
  * Delete record
  */
 async destroy({ params, response }: HttpContext) {
   let dados: any
   try {
     
     if(params.id){
       dados = await ClasseAluno.findOrFail(params.id)
       if(dados){
         await dados.delete()
         return response.json({mensagem:'Dados eliminado com Sucesso!',dados})
       }
       
     }
   } catch (error) {
     console.log(error)
     return response.json({ messege: 'Erro ao eliminar',  erro: error.messages})
   }
 }

 //outras Funcionalidades

 async getClasseAlunos({ params, response}: HttpContext){

  try {
    const dados: any = await db.from('classes')
    .join('classe_alunos', 'classe_alunos.classe_id', 'classes.id')
    .join('alunos', 'alunos.id', 'classe_alunos.aluno_id')
    .select('classes.nome as classe',
      'alunos.nome as Aluno',
      'alunos.periodo as periodo'
    ). orderBy('classes.nome', 'asc')
    .where('classe_alunos.classe_id', params.id)

    if(dados)
      return response.send(dados)

  } catch (error) {
    console.log(error)
    return response.json({ messege: 'Erro na pesquisa',  erro: error.messages})
  }
}
}