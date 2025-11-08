import { Module } from '@nestjs/common';
import { AuthRepository, UsersRepository } from './repositories';
import { DbService } from './db.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    DbService,
    AuthRepository,
    UsersRepository,
    DbService,
  ],
  exports: [DbService],
})
export class DbModule {}
