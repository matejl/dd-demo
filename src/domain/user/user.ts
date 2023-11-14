import { UUID } from '../uuid';

export class User {
  public readonly id: UUID;
  public readonly email: string;
  public readonly password: string;
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(
    id: UUID,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
