import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
//import { UserDto } from '../dto/user.dto';
import { Repository } from 'typeorm'
import { UserDTO, LoginDTO, UserUpdateBody } from '../Model/users.model';
import { ok } from 'assert';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {


  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  create(user: UserDTO): Promise<UserDTO> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserDTO[]> {
    return this.userRepository.find();;
  }

  async getByEmail(email: string): Promise<LoginDTO> {
    return await this.userRepository.findOne({ email });
  }

  async getById(id: number): Promise<UserDTO> {
    return await this.userRepository.findOneOrFail(id);
  }

  async update(id: number, updateItemDto: UserDTO) {
    const user = await this.userRepository.update(id, updateItemDto);
    if (!user) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return ok;
  }

  async remove(id: number) {

    //var user_status: string = "0";
    const user = await this.getById(id);
    return await this.userRepository.delete(user);


  }

}
