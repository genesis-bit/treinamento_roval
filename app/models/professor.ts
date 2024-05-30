/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  
  @column()
  public nome: string | undefined

  @column()
  public data_nascimento: Date | undefined

  @column()
  public categoria: string | undefined

  @column()
  public endereco: string | undefined

  @column()
  public estado: number | undefined

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}