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
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('alunos', AlunosController)
//router.get('alunos', [AlunosController, 'index']).as('aluno.index')
//router.post('alunos', [AlunosController, 'store']).as('aluno.store')
//router.get('alunos/:d', [AlunosController, 'show']).as('aluno.show')
