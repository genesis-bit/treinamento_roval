/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
 import type { HttpContext } from '@adonisjs/core/http'
 import Professor from '#models/professor'
 import { createAlunoValidator, updateAlunoValidator } from '#validators/aluno'
 
export default class ProfessorsController {

    async index({response}: HttpContext){
        try{
            const lista = await Professor.all()
            return response.json(lista)
        }
        catch(error){
            return response.status(401).json({message: 'Erro ao Consultar lista', erro: error});
        }
    }

    async store({ request, response }: HttpContext) {
        try {
            const dados = await request.only([ 'nome', 'idade','periodo','estado'])
            const data = await createAlunoValidator.validate(dados)
            let result: any = await Professor.create(data)
            return response.send(result)
        } 
        catch (error) {
            console.log(error)
            return response.status(401).json({ mensagem: 'Erro ao Adicionar Professor',  erro: error.message})
        }
     }

    async show({ params, response }: HttpContext) {    
        let dados: any
        try {
            if(params.id){
                dados = await Professor.findOrFail(params.id)
                return response.send(dados)
            }
        } 
        catch (error) {
            return response.status(404).json({ mensagem: 'Erro ao Procurar Professor',  erro: error.messages})
        }
    }

    async update({ request, response, params }: HttpContext) {
        let dados: any = await request.only(['nome', 'idade', 'periodo', 'estado'])
        try {
            const data = await Professor.findOrFail(params.id)
            if(data){
                const result = await updateAlunoValidator.validate(dados)
                await data.merge(result).save()
                return response.json({ mensagem: 'Dados actualizado com sucesso',  dados})
            }
            }
            catch (error) {
                return response.json({ mensagem: 'Erro ao Atualizar Aluno',  erro: error.messages})
            }
    }

    async destroy({ params, response }: HttpContext) {
        let dados: any
        try {        
            if(params.id){
                dados = await Professor.findOrFail(params.id)
                await dados.delete()
                return response.json({mensagem:'Dados eliminado com Sucesso!'})                
            }            
        }
        catch (error) {
            return response.json({ mensagem: 'Erro ao Deletar Aluno',  erro: error.messages})
        }
    }

}