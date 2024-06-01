import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
Professor
TurmaProfessor
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { HasMany } from '@adonisjs/lucid/types/relations'
import Professor from './professor.js'
import TurmaProfessor from './turma_professor.js'

export default class SalaProfessor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare idade: number

  @column()
  declare periodo: string

  @column()
  declare estado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  @belongsTo(() => TurmaProfessor, { foreignKey: 'turma_id' })
  declare TurmaProfessor: BelongsTo<typeof TurmaProfessor>

  @belongsTo(() => Professor, { foreignKey: 'professor_id' })
  declare Professor: BelongsTo<typeof Professor>
}
