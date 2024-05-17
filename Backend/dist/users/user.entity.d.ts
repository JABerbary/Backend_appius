import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    user_id: number;
    first_name: string;
    email: string;
    passwords: string;
    createAt: Date;
    updateAt: Date;
    user_status: string;
}
