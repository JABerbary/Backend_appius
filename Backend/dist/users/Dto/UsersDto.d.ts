export declare class CreateUsers {
    first_name: string;
    email: string;
    passwords: string;
    user_status: string;
}
declare const UsersDTO_base: import("@nestjs/common").Type<Omit<CreateUsers, "passwords">>;
export declare class UsersDTO extends UsersDTO_base {
}
export {};
