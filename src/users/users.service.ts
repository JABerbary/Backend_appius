import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { LoginDTO, UsersRepository } from '../Model/users.model';;
import { NotFoundException } from '@nestjs/common';
import { UsersDTO } from 'src/Model/Dto/UsersDto';


@Injectable()
export class UsersService {


  // constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  // os promises foram subistituídos : Promise<UserDTO> para Promise<User>
  constructor(@InjectRepository(UsersRepository) private userRepository: UsersRepository) { }

  async create(userDTO: UsersDTO): Promise<User> {
    // return this.userRepository.save(user);
    return await this.userRepository.createUser(userDTO);

  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();;
  }

  async getByEmail(email: string): Promise<LoginDTO> {
    return await this.userRepository.findOne({ email });
  }

  async getById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async editUser(
    userId: number,
    createUserDto: UsersDTO,): Promise<User> {

    const editedUser = await this.userRepository.findOne(userId);
    if (!editedUser) {
        throw new NotFoundException('Product not found');
    }
    return this.userRepository.editUser(createUserDto, editedUser);
}
  //--OLD--
  // async update(id: number, updateItemDto: UserDTO) {
  //   const user = await this.userRepository.update(id, updateItemDto);
  //   if (!user) {
  //     throw new NotFoundException(`Item ${id} not found`);
  //   }
  //   return ok;
  // }

  async remove(id: number) {

    //var user_status: string = "0";
    const user = await this.getById(id);
    return await this.userRepository.delete(user);


  }

}
