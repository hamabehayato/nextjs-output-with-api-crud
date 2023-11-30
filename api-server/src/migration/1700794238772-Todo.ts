// ファイル生成コマンド npx typeorm migration:create type-orm/migration/Todo
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedTodoTable1700794238772 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO \`todo\` (\`title\`, \`content\`) VALUES
          ('Todo 1', 'Content 1'),
          ('Todo 2', 'Content 2');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE \`todo\`;
    `);
  }
}