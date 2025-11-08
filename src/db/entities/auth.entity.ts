// src/database/entities/auth.entity.ts
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'auth' })
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  // You would add more here, like password hash, refresh token, etc.

  @CreateDateColumn()
  createdAt: Date;
}