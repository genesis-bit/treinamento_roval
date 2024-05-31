import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Curso from './curso.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Aluno from './aluno.js'

export default class CursoAluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare aluno_id: number

  @column()
  declare curso_id: number

  @column()
  declare estado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Curso, {foreignKey: 'curso_id'})
  declare classe: BelongsTo <typeof Curso>

  @belongsTo(() => Aluno, {foreignKey: 'aluno_id'})
  declare aluno: BelongsTo <typeof Aluno>
}