import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
//import { UserDto } from 'src/dto/user.dto';
import { UsersService } from '../users/users.service';
import { LoginDTO } from '../Model/users.model';
import { UsersDTO } from 'src/Model/Dto/UsersDto';
import { User } from './user.entity';


@Controller('user')
export class UsersController {

  constructor(private readonly userService: UsersService,) { }

  @Post('/')
  create(@Body() createUserDto: UsersDTO): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UsersDTO): Promise<User> {
    return this.userService.editUser(id, updateUserDto);
  }




  //--OLD--
  // @Post('/')
  // create(@Body() createUserDto: UserDTO): Promise<User> {
  //   return this.userService.create(createUserDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('/')
  // async findAll(): Promise<UserDTO[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // async getById(@Param('id') id: number): Promise<any> {
  //   return this.userService.getById(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updateUserDto: UserDTO) {
  //   return this.userService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: number) {
  //   return this.userService.remove(id);
  // }

}
