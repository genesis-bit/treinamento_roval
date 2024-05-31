import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ClasseAluno from './classe_aluno.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Classe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string | null

  @column()
  declare estado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => ClasseAluno, { foreignKey: 'classe_id'})
  declare classes: HasMany <typeof ClasseAluno>
}