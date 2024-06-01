import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Turma from './turma.js'

export default class TurmaAluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare turma_id: number

  @column()
  declare aluno_id: number

  @column()
  declare estado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Aluno, { foreignKey: 'aluno_id' })
  declare aluno: BelongsTo<typeof Aluno>

  @belongsTo(() => Turma, { foreignKey: 'turma_id' })
  declare turma: BelongsTo<typeof Turma>
}
