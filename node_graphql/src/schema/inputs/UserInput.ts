import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const UserInputType = new GraphQLInputObjectType({
	name: "UserInput",
	fields: {
		name: 			{ type: GraphQLNonNull(GraphQLString) },
		username: 	{ type: GraphQLString },
		password: 	{ type: GraphQLString },
		behaviour: 	{ type: GraphQLString }
	}
})