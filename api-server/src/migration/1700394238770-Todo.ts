// ファイル生成コマンド npx typeorm migration:create type-orm/migration/Todo

// マイグレーション実行コマンド
// npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoTable1700394238770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`todo\` (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`title\` VARCHAR(191) NOT NULL,
        \`content\` VARCHAR(191) NOT NULL,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 初期データ挿入クエリ
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
