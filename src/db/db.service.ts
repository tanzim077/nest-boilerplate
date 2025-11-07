import { Injectable } from '@nestjs/common';
import { AuthRepository, UsersRepository } from './repositories';

@Injectable()
export class DbService {
  constructor(
    public readonly user: UsersRepository,
    public readonly auth: AuthRepository,
  ) {}
}
