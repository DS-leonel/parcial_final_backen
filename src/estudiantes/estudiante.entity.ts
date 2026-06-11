import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  codigo!: string;
}