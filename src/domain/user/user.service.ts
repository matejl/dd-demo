import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UUID } from '../uuid';
import { User } from './user';
import { AppException } from '../app.exception';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.getByEmail(email);
    if (user.password !== password) {
      throw AppException.incorrectCredentials();
    }
    return user;
  }

  getByID(id: UUID): Promise<User> {
    return this.userRepository.getByID(id);
  }

  create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
