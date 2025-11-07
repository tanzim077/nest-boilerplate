import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from '../schemas';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}

  async create(createAuthDto: any): Promise<Auth> {
    const newUser = new this.authModel(createAuthDto);
    return newUser.save();
  }

  async findAll(): Promise<Auth[]> {
    return this.authModel.find().exec();
  }

  async findByEmail(email: string): Promise<Auth | null> {
    return this.authModel.findOne({ email }).exec();
  }

  // ... add other methods like findById, update, delete
}
