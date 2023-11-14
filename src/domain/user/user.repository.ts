import { User } from './user';
import { UUID } from '../uuid';

export abstract class UserRepository {
  abstract getByEmail(email: string): Promise<User>;

  abstract getByID(id: UUID): Promise<User>;

  abstract create(user: User): Promise<User>;
}
