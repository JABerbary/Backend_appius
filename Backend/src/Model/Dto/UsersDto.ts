import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class UsersDTO {

    // @ApiProperty()
    // user_id: number;

    @ApiProperty()
    @IsString()
    first_name: string;
    
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    passwords: string;

    @ApiProperty()
    @IsString()
    user_status: string;
}
