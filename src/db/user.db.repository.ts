import { UserRepository } from '../domain/user/user.repository';
import { Injectable } from '@nestjs/common';
import { UUID } from '../domain/uuid';
import { User } from '../domain/user/user';
import { PrismaService } from './prisma/prisma.service';
import { UserMapper } from './mapper/user.mapper';
import { AppException } from '../domain/app.exception';

@Injectable()
export class UserDbRepository extends UserRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async create(user: User): Promise<User> {
    let created;
    try {
      created = await this.prismaService.user.create({
        data: UserMapper.fromDomain(user),
      });
    } catch (e) {
      if (e.code === 'P2002') {
        throw AppException.duplicateEntry(e.meta.target[0]);
      }
    }
    return UserMapper.toDomain(created);
  }

  async getByID(id: UUID): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id.toString(),
      },
    });
    return UserMapper.toDomain(user);
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    return UserMapper.toDomain(user);
  }
}
