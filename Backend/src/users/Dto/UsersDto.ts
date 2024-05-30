import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class CreateUsers {

    @IsString()
    first_name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    passwords: string;

    @IsString()
    user_status: string;
}
    
    export class UsersDTO extends OmitType(CreateUsers, [
        'passwords'
      ] as const) {}

