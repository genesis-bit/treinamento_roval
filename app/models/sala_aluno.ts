import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import Professor from './professor.js'
Professor
export default class SalaAluno extends BaseModel {
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
}
