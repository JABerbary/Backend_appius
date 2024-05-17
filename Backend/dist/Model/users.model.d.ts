import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { UsersDTO } from './Dto/UsersDto';
export declare class UsersModel {
}
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: UsersDTO): Promise<User>;
    editUser(createUserDto: UsersDTO, editedUserId: string): Promise<User>;
}
