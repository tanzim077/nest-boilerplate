import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UsersRepository } from '../user/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  getHello(): string {
    return 'Hello World from auth module!';
  }
}
