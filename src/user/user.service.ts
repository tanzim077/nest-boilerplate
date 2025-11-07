import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getHello() {
    await this.usersRepository.create({
      age: 12,
      email: 'test@gmail.com',
      username: 'test',
    });
    return await this.usersRepository.findAll();
    // return 'Hello World from user module!';
  }
}
