import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ nullable: true, comment: "TEST ONLY user name - Input example" })
	name!: string;
	@Column({ nullable: true, comment: "TEST ONLY user username - Input example" })
	username!: string;
	@Column({ nullable: true, comment: "TEST ONLY user password - Input example" })
	password!: string;
}