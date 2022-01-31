import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { User } from '../users/user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { UsersDTO } from './Dto/UsersDto';


export class UsersModel { }

//dto testing rpository validation
@EntityRepository(User)
export class UsersRepository extends Repository<User> {

    public async createUser(
        createUserDto: UsersDTO,
    ): Promise<User> {
        const { first_name, email, passwords, user_status } = createUserDto;

        const user = new User();
        user.first_name = first_name;
        user.email = email;
        user.passwords = passwords;
        user.user_status = user_status;

        await user.save();
        return user;
    }

    public async editUser(
        createUserDto: UsersDTO,
        editedUser: User,
    ): Promise<User> {
        const { first_name, email, passwords, user_status } = createUserDto;

        editedUser.first_name = first_name;
        editedUser.email = email;
        editedUser.passwords = passwords;
        editedUser.user_status = user_status;
        await editedUser.save();

        return editedUser;
    }

}


////--old--
// export class UsersDTO {

//     @ApiProperty()
//     user_id: number;

//     @ApiProperty()
//     @IsString()
//     first_name: string;


//     @ApiProperty()
//     @IsString()
//     email: string;

//     @ApiProperty()
//     @IsString()
//     passwords: string;

//     @ApiProperty()
//     @IsString()
//     user_status: string;
// }


export class LoginDTO {
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    passwords: string;
}

export class UserBody {
    @ApiProperty()
    UserDTO;
}

