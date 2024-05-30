/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProfessorDisciplina extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public professor_id: number | undefined

  @column()
  public disciplina_id: number | undefined


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
