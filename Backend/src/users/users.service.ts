import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UsersDTO } from './Dto/UsersDto';
import { User } from 'src/schemas/user.schema';
import { UserPayload } from 'src/Model/users.payload';


@Injectable()
export class UsersService { 
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}


  async createUser(@Body() createUserDto: UsersDTO): Promise<UserPayload> {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }

    async ListUserByID(id:string):Promise<UserPayload> {
       const listUser = await  this.userModel.findOne({_id:id}).exec();
       if(!listUser)
        {
          throw new NotFoundException(`User with email id:${id} not found `)
        }
       return listUser;
    }

    async ListUser(): Promise<UserPayload[]>{
      const listUsers = await this.userModel.find();
      return listUsers;
    }

     async editUser (id:string , @Body() createUserDto: UsersDTO) : Promise<UserPayload> {
      await  this.userModel.updateOne( {_id:id} , createUserDto);
      const updateUser = this.userModel.findById(id);
      return updateUser
    }
}
