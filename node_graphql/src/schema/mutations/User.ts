import { GraphQLString } from "graphql";
import { resolve } from "path";
import { UserType } from "../type_defs/User";

export const CREATE_USER = {
	type: UserType,
	args: {
		name: 		{ type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString }
	},

	resolve(parent: any, args: any) {
		const { name, username, password } = args;
		return args;
	}
};