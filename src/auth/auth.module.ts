import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './schema';
import { AuthRepository } from './auth.repository';
import { UsersRepository } from '../user/users.repository';
import { User, UserSchema } from '../user/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, UsersRepository],
})
export class AuthModule {}
