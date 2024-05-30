import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Patch } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/Jwt/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { UsersDTO } from '../users/Dto/UsersDto';



@Controller('user')
export class UsersController {

  constructor(private readonly userService: UsersService,) { }

  @Post('/')
  create(@Body() createUserDto: UsersDTO) {
    return this.userService.createUser(createUserDto);
  }

  @Get('/list')
  listUser(){
    return  this.userService.ListUser();
  }

  @Get('/:id/')
  listUserById(@Param('id') id :string){
    return  this.userService.ListUser();
  }

  @Patch('/edit/:id')
  update( @Param('id') id: string,@Body() updateUserDto: UsersDTO) {
    return this.userService.editUser(id,updateUserDto);
  }


}
