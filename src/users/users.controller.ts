import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
//import { UserDto } from 'src/dto/user.dto';
import { UsersService } from '../users/users.service';
import { UserDTO, LoginDTO } from '../Model/users.model';


@Controller('user')
export class UsersController {

  constructor(private readonly userService: UsersService,
  ) { }
  @Post('/')
  create(@Body() createUserDto: UserDTO): Promise<UserDTO> {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async findAll(): Promise<UserDTO[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<any> {
    return this.userService.getById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UserDTO) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }

}
