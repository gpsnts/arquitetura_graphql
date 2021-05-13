import { GraphQLID, GraphQLString } from "graphql";

import { UserType } from "../type_defs/User"
import { Users } from "../../entities/Users";
import { resolve } from "path";

export const CREATE_USER = {
	type: UserType,
	args: {
		name: 		{ type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString }
	},

	async resolve(parent: any, args: any) {
		const { name, username, password } = args;
		await Users.insert({ name, username, password });
		return args;
	}
};

export const DELETE_USER = {
	type: UserType,
	args: {
		id: 		{ type: GraphQLID }
	},

	async resolve(parent: any, args: any) {
		const ID = args.id;
		await Users.delete(ID);
	}
}

export const UPDATE_USER = {
	type: UserType,
	args: {
		id: 					{ type: GraphQLID },
		new_name: 		{ type: GraphQLString },
		new_username: { type: GraphQLString }
	},

	async resolve(parent: any, args: any) {
		const { id, new_name, new_username } = args;
		const found_user: Users | undefined = await Users.findOne({ id });

		if (!found_user) throw new Error("User not found");	

		await Users.update(id, { name: new_name, username: new_username });
	}
}