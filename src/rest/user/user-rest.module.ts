import { Module } from '@nestjs/common';
import { UserRestController } from './user-rest.controller';
import { UserModule } from '../../domain/user/user.module';

@Module({
  controllers: [UserRestController],
  imports: [UserModule],
})
export class UserRestModule {}
