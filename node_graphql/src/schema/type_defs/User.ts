import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: 			{ type: GraphQLID },
		name: 		{ type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString }
	})
});


export const UserReturnType = new GraphQLObjectType({
	name: "UserReturn",
	fields: () => ({
		name: 		{ type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString }
	})
});