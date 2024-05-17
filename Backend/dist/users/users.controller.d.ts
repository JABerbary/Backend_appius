import { UsersService } from '../users/users.service';
import { UsersDTO } from 'src/Model/Dto/UsersDto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: UsersDTO): Promise<User>;
    findAll(): Promise<User[]>;
    getById(id: number): Promise<any>;
    update(id: number, updateUserDto: UsersDTO): Promise<User>;
}
