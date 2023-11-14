import { Prisma } from '@prisma/client';
import { User } from '../../domain/user/user';
import { UUID } from '../../domain/uuid';

export class UserMapper {
  static toDomain(user: Prisma.userCreateInput): User {
    return new User(
      UUID.fromString(user.id),
      user.email,
      user.password,
      user.first_name,
      user.last_name,
    );
  }

  // todo :)
  static fromDomain(user: User): any {
    return {
      id: user.id ?? undefined,
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
    };
  }
}
