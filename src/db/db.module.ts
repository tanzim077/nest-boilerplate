import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema, User, UserSchema } from './schemas';
import { AuthRepository, UsersRepository } from './repositories';
import { DbService } from './db.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [DbService, AuthRepository, UsersRepository, DbService],
  exports: [DbService],
})
export class DbModule {}
