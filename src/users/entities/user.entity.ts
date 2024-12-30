import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' }) // Pastikan nama kolom benar
  name: string;

  @Column({ name: 'username' }) // Pastikan nama kolom benar
  username: string;

  @Column({ name: 'pass' }) // Pastikan nama kolom benar
  pass: string;
}
