import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/Jwt/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { UsersDTO } from 'src/Model/Dto/UsersDto';



@Controller('user')
export class UsersController {

  constructor(private readonly userService: UsersService,) { }

  @Post('/')
  create(@Body() createUserDto: UsersDTO): Promise<{}> {
    return this.userService.createUser(createUserDto);
  }


  @Patch('/edit/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UsersDTO): Promise<{}> {
    return this.userService.editUser(updateUserDto,id);
  }


}
