import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 256, unique: true, nullable: false })
  uname: string;

  @Column({ type: 'varchar', length: 1024, nullable: false })
  passwd: string;

  @Column({ type: 'varchar', length: 256, unique: true, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 15, unique: true, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  dp: string;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  cover: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  bio: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;
}
