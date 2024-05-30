/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import Aluno from '#models/aluno'
import { createAlunoValidator, updateAlunoValidator } from '#validators/aluno'
import { HttpContext } from '@adonisjs/core/http'

export default class AlunosController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    try {
      const dados = await Aluno.all()
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
      const dados = await request.only([ 'nome', 'idade', 'sala', 'turma', 'periodo', 'endereco', 'estado'])
      const data = await createAlunoValidator.validate(dados)
      let result: any = await Aluno.create(data)
      return response.send(result)
    } catch (error) {
      console.log(error)
      return response.status(404).json({ message: 'Falha ao salvar' })
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
        dados = await Aluno.findOrFail(params.id)
        return response.send(dados)
      }
    } catch (error) {
      console.log(error)
      return response.status(404).json({ message: 'Dados não encontrado' })
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

    let dados: any = await request.only(['nome', 'idade', 'sala', 'turma', 'periodo', 'endereco', 'estado'])
    try {
      const data = await Aluno.findOrFail(params.id)
      if(data){
        const result = await updateAlunoValidator.validate(dados)
        await data.merge(result).save()
        return response.json({ messege: 'Dados actualizado com sucesso',  dados})
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao actualizar',  dados})
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    let dados: any
    try {
      
      if(params.id){
        dados = await Aluno.findOrFail(params.id)
        if(dados){
          await dados.delete()
          return response.json({mensagem:'Dados eliminado com Sucesso!',dados})
        }
        
      }
    } catch (error) {
      console.log(error)
      return response.json({mensagem:'Dados não eliminado!',dados})
    }
  }
}