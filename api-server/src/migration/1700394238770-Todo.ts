// ファイル生成コマンド npx typeorm migration:create type-orm/migration/Todo
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoTable1700394238770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* todoテーブルがない場合は todo テーブル作成 */
    const tableExists = await queryRunner.hasTable('todo');
    if (!tableExists) {
      await queryRunner.query(`
        CREATE TABLE \`todo\` (
          \`id\` INT NOT NULL AUTO_INCREMENT,
          \`title\` VARCHAR(191) NOT NULL,
          \`content\` VARCHAR(191) NOT NULL,
          PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `);
    }

    /* todo テーブルが空の場合のみ初期データを投入する */
    const rowCount = await queryRunner.query(`
      SELECT COUNT(*) as count FROM \`todo\`;
    `);

    console.log('rowCount', rowCount);
    if (rowCount[0].count === 0) {
      await queryRunner.query(`
        INSERT INTO \`todo\` (\`title\`, \`content\`) VALUES
          ('Todo 1', 'Content 1'),
          ('Todo 2', 'Content 2');
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE \`todo\`;
    `);
  }
}
