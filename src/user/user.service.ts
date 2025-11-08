import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}

  async getHello() {
    // await this.db.user.create({
    //   age: 12,
    //   email: 'test@gmail.com',
    //   username: 'test',
    // });
    return await this.db.user.findAll();
    // return 'Hello World from user module!';
  }
}
