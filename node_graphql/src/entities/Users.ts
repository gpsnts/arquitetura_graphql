import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ nullable: true, comment: "TEST ONLY user name" })
	name!: string;
	@Column({ nullable: true, comment: "TEST ONLY user username" })
	username!: string;
	@Column({ nullable: true, comment: "TEST ONLY user password" })
	password!: string;
}