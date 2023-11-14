import { GetUserResDto } from './get-user-res.dto';
import { User } from '../../domain/user/user';
import { CreateUserReqDto } from './create-user-req.dto';

export class UserRestMapper {
  static fromDomain(user: User): GetUserResDto {
    return new GetUserResDto(
      user.id.toString(),
      user.email,
      user.firstName,
      user.lastName,
    );
  }

  static toDomain(createUserReqDto: CreateUserReqDto): User {
    return new User(
      null,
      createUserReqDto.email,
      createUserReqDto.password,
      createUserReqDto.firstName,
      createUserReqDto.lastName,
    );
  }
}
