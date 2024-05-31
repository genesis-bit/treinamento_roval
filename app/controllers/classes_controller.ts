import Classe from '#models/classe'
import { createClasseValidator, updateClasseValidator } from '#validators/classe'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassesController {
    /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    try {
      const dados = await Classe.all()
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
      const data = await createClasseValidator.validate(dados)
      let result: any = await Classe.create(data)
      return response.send({mensagem: 'Classe registada com Sucesso', result})
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Adicionar Classe',  erro: error.messages})
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
        dados = await Classe.findOrFail(params.id)
        return response.send(dados)
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Procurar Classe',  erro: error.messages})
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
      const data = await Classe.findOrFail(params.id)
      if(data){
        const result = await updateClasseValidator.validate(dados)
        await data.merge(result).save()
        return response.json({ messege: 'Dados actualizado com sucesso',  dados})
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Atualizar Classe',  erro: error.messages})

    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    let dados: any
    try {
      
      if(params.id){
        dados = await Classe.findOrFail(params.id)
        if(dados){
          await dados.delete()
          return response.json({mensagem:'Dados eliminado com Sucesso!',dados})
        }
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Deletar Classe',  erro: error.messages})
    }
  }
}