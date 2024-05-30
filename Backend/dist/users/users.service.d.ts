import { Model } from 'mongoose';
import { UsersDTO } from './Dto/UsersDto';
import { User } from 'src/schemas/user.schema';
import { UserPayload } from 'src/Model/users.payload';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: UsersDTO): Promise<UserPayload>;
    ListUserByID(id: string): Promise<UserPayload>;
    ListUser(): Promise<UserPayload[]>;
    editUser(id: string, createUserDto: UsersDTO): Promise<UserPayload>;
}
