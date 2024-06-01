import type { HttpContext } from '@adonisjs/core/http'

import TurmaAluno from '#models/turma_aluno'
import { createTurmaAlunoValidator, updateTurmaAlunoValidator } from '#validators/turma_aluno'

export default class TurmaAlunosController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try {
      const dados = await TurmaAluno.query().preload('aluno').preload('turma')
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
      const dados = await request.only(['aluno_id', 'turma_id', 'estado'])
      const data = await createTurmaAlunoValidator.validate(dados)
      let result: any = await TurmaAluno.create(data)
      return response.send({ mensagem: 'registada com Sucesso', result })
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Adicionar', erro: error.messages })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    let dados: any
    console.log(params.id)
    try {
      if (params.id) {
        dados = await TurmaAluno.findOrFail(params.id)
        return response.send(dados)
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro na pesquisa', erro: error.messages })
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
    let dados: any = await request.only(['aluno_id', 'turma_id', 'estado'])
    try {
      const data = await TurmaAluno.findOrFail(params.id)
      if (data) {
        const result = await updateTurmaAlunoValidator.validate(dados)
        await data.merge(result).save()
        return response.json({ messege: 'Dados actualizado com sucesso', dados })
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Atualizar', erro: error.messages })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    let dados: any
    try {
      if (params.id) {
        dados = await TurmaAluno.findOrFail(params.id)
        if (dados) {
          await dados.delete()
          return response.json({ mensagem: 'Dados eliminado com Sucesso!', dados })
        }
      }
    } catch (error) {
      console.log(error)
      return response.json({ messege: 'Erro ao Deletar', erro: error.messages })
    }
  }
}
