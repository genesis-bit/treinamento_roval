import Sala from '#models/sala'
import { createSalaValidator, updateSalaValidator } from '#validators/sala'
updateSalaValidator
Sala
// import type { HttpContext } from '@adonisjs/core/http'
createSalaValidator
export default class SalasController {
  listarSalasDeAula(_req: Request, _res: Response) {
    // Lógica para listar todas as salas de aula
  }

  criarSalaDeAula(_req: Request, _res: Response) {
    // Lógica para criar uma nova sala de aula
  }

  atualizarSalaDeAula(_req: Request, _res: Response) {
    // Lógica para atualizar uma sala de aula existente
  }

  deletarSalaDeAula(_req: Request, _res: Response) {
    // Lógica para deletar uma sala de aula existente
  }
}
