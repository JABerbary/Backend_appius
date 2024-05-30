import { UsersService } from '../users/users.service';
import { UsersDTO } from '../users/Dto/UsersDto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: UsersDTO): Promise<import("../Model/users.payload").UserPayload>;
    listUser(): Promise<import("../Model/users.payload").UserPayload[]>;
    listUserById(id: string): Promise<import("../Model/users.payload").UserPayload[]>;
    update(id: string, updateUserDto: UsersDTO): Promise<import("../Model/users.payload").UserPayload>;
}
