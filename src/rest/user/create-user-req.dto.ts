import { IsDefined } from 'class-validator';

export class CreateUserReqDto {
  @IsDefined()
  public readonly email: string;
  @IsDefined()
  public readonly password: string;
  @IsDefined()
  public readonly firstName: string;
  @IsDefined()
  public readonly lastName: string;
}
