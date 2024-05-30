import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'turma_professors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('turma_id').unsigned().references('turmas.id').onDelete('CASCADE')
      table.integer('professor_id').unsigned().references('professors.id').onDelete('CASCADE')
      table.integer('estado').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
