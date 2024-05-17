import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UsersDTO {


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
