import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany} from 'typeorm';
import {Order} from "../order/order.entity";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'firstName', length: 70, nullable: false })
    firstName: string;

    @Column({ name: 'lastName', length: 70, nullable: false })
    lastName: string;

    @Column({name: 'email', length: 70, nullable: false })
    email: string;

    @Column({name: 'created_at', type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
    createdAt?: Date;

    @Column({name: 'updated_at', type: 'timestamptz', default: () => "CURRENT_TIMESTAMP"})
    updatedAt?: Date;

    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn()
    order: Order

}
