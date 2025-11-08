import { Module } from '@nestjs/common';
import { Auth, User } from './entities';
import { AuthRepository, UsersRepository } from './repositories';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Auth])],
  providers: [DbService, AuthRepository, UsersRepository, DbService],
  exports: [DbService],
})
export class DbModule {}
