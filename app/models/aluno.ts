/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import TurmaAluno from './turma_aluno.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'


export default class Aluno extends BaseModel {
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
 
  @hasMany(() => TurmaAluno, { foreignKey: 'aluno_id'})
  declare turma_alunos: HasMany <typeof TurmaAluno>
}