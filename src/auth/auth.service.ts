import { Injectable } from '@nestjs/common';
import { AuthRepository, UsersRepository } from '../db/repositories';
import { DbService } from '../db/db.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DbService,
  ) {}

  async getHello() {
    await this.db.user.create({
      age: 12,
      email: 'test@gmail.com',
      username: 'test',
    });

    await this.db.auth.create({
      email: 'test@gmail.com',
    });

    console.log(await this.db.auth.findAll());
    console.log(await this.db.user.findAll());

    return 'Hello World from auth module!';
  }
}
