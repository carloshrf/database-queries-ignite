import { Column, MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class addUserOrderColumn1626386100505 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users',
      new TableColumn(
        {
          name: 'orderId',
          type: 'uuid',
        }
      )
    );

    await queryRunner.createForeignKey('users',
      new TableForeignKey(
        {
          name: 'UserOrderFK',
          columnNames: ['orderId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'orders',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserOrderFK');

    await queryRunner.dropColumn('users', 'orderId')
  }

}
