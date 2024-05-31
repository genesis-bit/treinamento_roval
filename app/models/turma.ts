import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import TurmaAluno from './turma_aluno.js'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare descricao: string
  
  @column()
  declare estado: number
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => TurmaAluno, { foreignKey: 'turma_id'})
  declare turma_alunos: HasMany <typeof TurmaAluno>

}