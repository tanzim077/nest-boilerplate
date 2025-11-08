import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entities';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async create(createAuthDto: any): Promise<Auth> {
    return this.authRepository.save(createAuthDto);
  }

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }
}