// ALL_CAPS - convenção
import { GraphQLList } from "graphql";
import { UserType } from "../type_defs/User";

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	
	resolve(): void {
		console.log("WIP");
	}
};