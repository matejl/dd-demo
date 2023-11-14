export class GetUserResDto {
  public readonly id: string;
  public readonly email: string;
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(id: string, email: string, firstName: string, lastName: string) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
