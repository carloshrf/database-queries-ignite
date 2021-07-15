import { Column, MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class addGameGenreColumn1626385287460 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('games',
      new TableColumn(
        {
          name: 'genreId',
          type: 'uuid',
        }
      )
    );

    await queryRunner.createForeignKey('games',
      new TableForeignKey(
        {
          name: 'GameGenreFK',
          columnNames: ['genreId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'genres',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('games', 'GameGenreFK');

    await queryRunner.dropColumn('games', 'genreId')
  }

}
