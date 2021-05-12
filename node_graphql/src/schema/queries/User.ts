// ALL_CAPS - convenção
import { GraphQLList } from "graphql";

import { UserType } from "../type_defs/User";
import { Users } from "../../entities/Users";

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	
	async resolve(parent: any, args: any): Promise<Users[]> {
		return await Users.find();;
	}
};