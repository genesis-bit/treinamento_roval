/* eslint-disable @adonisjs/prefer-lazy-controller-import */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AlunosController from '#controllers/alunos_controller'
import ClasseAlunosController from '#controllers/classe_alunos_controller'
import ClassesController from '#controllers/classes_controller'
import CursoAlunosController from '#controllers/curso_alunos_controller'
import CursosController from '#controllers/cursos_controller'
import ProfessorsController from '#controllers/professors_controller'
import SalaAlunosController from '#controllers/sala_alunos_controller'
import SalaProfessorsController from '#controllers/sala_professors_controller'
import SalasController from '#controllers/salas_controller'
import TurmaAlunosController from '#controllers/turma_alunos_controller'
import TurmasController from '#controllers/turmas_controller'
import router from '@adonisjs/core/services/router'
SalaAlunosController
SalaProfessorsController
SalasController
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.resource('sala-professor', SalaProfessorsController)
router.resource('sala-aluno', SalaAlunosController)
router.resource('sala', SalasController)
router.resource('alunos', AlunosController)
router.resource('turma-alunos', TurmaAlunosController)
router.resource('turmas', TurmasController)
router.resource('cursos', CursosController)
router.resource('classes', ClassesController)
router.resource('classe-aluno', ClasseAlunosController)
router.resource('curso-aluno', CursoAlunosController)
router.resource('professores', ProfessorsController)

//Rotas de Pesquisas

router.get('curso-alunos/:id', [CursoAlunosController, 'getAlunosCurso'])
router.get('classe-alunos/:id', [ClasseAlunosController, 'getClasseAlunos'])

//router.get('alunos', [AlunosController, 'index']).as('aluno.index')
//router.post('alunos', [AlunosController, 'store']).as('aluno.store')
//router.get('alunos/:d', [AlunosController, 'show']).as('aluno.show')
