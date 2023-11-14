import { IsDefined } from 'class-validator';

export class PostLoginDto {
  @IsDefined()
  public readonly email;
  @IsDefined()
  public readonly password;
}
