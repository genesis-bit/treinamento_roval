import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Classe from './classe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Aluno from './aluno.js'

export default class ClasseAluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare aluno_id: number

  @column()
  declare classe_id: number

  @column()
  declare estado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Classe, {foreignKey: 'classe_id'})
  declare classe: BelongsTo <typeof Classe>

  @belongsTo(() => Aluno, {foreignKey: 'aluno_id'})
  declare aluno: BelongsTo <typeof Aluno>
}