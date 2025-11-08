import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAuthDto: { email: string }) {
    return this.prisma.auth.create({
      data: createAuthDto,
    });
  }

  async findAll() {
    return this.prisma.auth.findMany();
  }
}