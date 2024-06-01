import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import CursoAluno from './curso_aluno.js'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare codigo: string

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

  @hasMany(() => CursoAluno, { foreignKey: 'curso_id' })
  declare cursos: HasMany<typeof CursoAluno>
}
