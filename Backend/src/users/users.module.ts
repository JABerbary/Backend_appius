import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../schemas/user.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: User }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule { }
