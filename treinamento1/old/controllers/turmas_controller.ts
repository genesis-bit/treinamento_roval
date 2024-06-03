/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */

import Turma from '#models/turma'
import { createTurmaValidator, updateTurmaValidator } from '#validators/turma'
import type { HttpContext } from '@adonisjs/core/http'

export default class TurmasController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    try {
      const dados = await Turma.all()
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
      const dados = await request.only([ 'nome', 'descricao','estado'])
      const data = await createTurmaValidator.validate(dados)
      let result: any = await Turma.create(data)
      return response.send({mensagem: 'Turma registada com Sucesso', result})
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Adicionar Turma',  erro: error.messages})
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
        dados = await Turma.findOrFail(params.id)
        return response.send(dados)
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Procurar Turma',  erro: error.messages})
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

    let dados: any = await request.only(['nome', 'descricao','estado']) 
    try {
      const data = await Turma.findOrFail(params.id)
      if(data){
        const result = await updateTurmaValidator.validate(dados)
        await data.merge(result).save()
        return response.json({ messege: 'Dados actualizado com sucesso',  dados})
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Atualizar Turma',  erro: error.messages})

    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    let dados: any
    try {
      
      if(params.id){
        dados = await Turma.findOrFail(params.id)
        if(dados){
          await dados.delete()
          return response.json({mensagem:'Dados eliminado com Sucesso!',dados})
        }
        
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Deletar Turma',  erro: error.messages})
    }
  }
}