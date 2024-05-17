import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDTO } from '../Model/Dto/UsersDto';


@Injectable()
export class UsersService { 
  constructor(@InjectModel('User') private readonly userModel: Model<UsersDTO>) {}


  async createUser(createUserDto: UsersDTO) {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    }

  async editUser (createUserDto: UsersDTO, editedUserId: number){
      return this.userModel.findByIdAndUpdate(editedUserId, createUserDto, { new: true }).exec();
    }



}
