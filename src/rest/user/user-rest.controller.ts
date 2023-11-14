import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from '../../domain/user/user.service';
import { GetUserResDto } from './get-user-res.dto';
import { UUID } from '../../domain/uuid';
import { CreateUserReqDto } from './create-user-req.dto';
import { UserRestMapper } from './user-rest.mapper';
import { PostLoginDto } from './post-login.dto';
import { Request } from 'express';
import { UserSessionDto } from './user-session.dto';

@Controller('/users')
export class UserRestController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async getByID(@Param('id') id: string): Promise<GetUserResDto> {
    return UserRestMapper.fromDomain(
      await this.userService.getByID(UUID.fromString(id)),
    );
  }

  @Post('/login')
  async login(
    @Body() postLoginDto: PostLoginDto,
    @Req() request: Request,
  ): Promise<GetUserResDto> {
    const user = await this.userService.login(
      postLoginDto.email,
      postLoginDto.password,
    );
    (<UserSessionDto>(request.session as unknown)).userId = user.id.toString();
    return UserRestMapper.fromDomain(user);
  }

  @Post()
  async create(
    @Body() createUserReqDto: CreateUserReqDto,
  ): Promise<GetUserResDto> {
    return UserRestMapper.fromDomain(
      await this.userService.create(UserRestMapper.toDomain(createUserReqDto)),
    );
  }
}
