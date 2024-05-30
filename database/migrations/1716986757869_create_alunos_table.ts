import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.integer('idade', 20).notNullable().unsigned()
      table.string('sala', 10).notNullable()
      table.string('turma', 20).notNullable()
      table.string('periodo', 200).notNullable()
      table.string('endereco', 100).notNullable()
      table.integer('estado', 10).defaultTo(1).notNullable().unsigned()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}