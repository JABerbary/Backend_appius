import { User } from '../schemas/user.schema';
declare const UserPayload_base: import("@nestjs/common").Type<Partial<User>>;
export declare class UserPayload extends UserPayload_base {
    createdAt?: string;
    updatedAt?: string;
}
export {};
