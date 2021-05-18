import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInterfaceType, GraphQLNonNull } from "graphql";

export const UserBehaviourInterfaceType = new GraphQLInterfaceType({
	name: "UserBehaviourInterface",
	fields: {
		behaviour: { type: GraphQLString }
	}
});

export const UserType = new GraphQLObjectType({
	name: "User",
	interfaces: [ UserBehaviourInterfaceType ],
	fields: () => ({
		id: 			{ type: GraphQLID },
		name: 		{ type: GraphQLNonNull(GraphQLString) },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
		behaviour: {
			type: GraphQLString, 
			resolve(parent: any, args: any) {
				return `BEHAVIOUR [USER_INTERFACE]: ${parent.username.length % 2 == 0 ? "Even" : "Odd"}`
			}
		}
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