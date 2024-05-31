/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'
import TurmaProfessor from '#models/turma_professor'

export default class TurmaProfessorsController {

    async index({response}: HttpContext) {
        try{

        }
        catch(error){

        }
    }

    async store({ request }: HttpContext) {}

    async show({ params }: HttpContext) {}

   // async update({request, response, params}: HttpContext) {}

    async destroy({ params }: HttpContext) {}
}
