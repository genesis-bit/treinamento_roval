/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { HasMany } from '@adonisjs/lucid/types/relations'
import AlunoDisciplina from './aluno_disciplina.js'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare idade: number
  
  @column()
  declare sala: string

  @column()
  declare turma: string
  
  @column()
  declare periodo: string

  @column()
  declare endereco: string 
  
  @column()
  declare estado: number 
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //Relacionamento

  //@hasMany(() => AlunoDisciplina, { foreignKey: 'aluno_id'})
  //declare disciplinas: HasMany<typeof AlunoDisciplina> | undefined
}