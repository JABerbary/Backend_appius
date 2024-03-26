import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//--old--
//@Entity('user')
@Entity() 
export class User extends BaseEntity{


    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column({ name: 'first_name', type: 'varchar', length: 50 })
    first_name: string;

    @Column({ name: 'email', type: 'varchar', length: 50 })
    email: string;

    @Column({ name: 'passwords', type: 'varchar', length: 50 })
    passwords: string;

    @Column({ name: 'createAt', type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updateAt: Date;

    @Column({ name: 'user_status', type: 'char', length: 1 })
    user_status: string;



}
