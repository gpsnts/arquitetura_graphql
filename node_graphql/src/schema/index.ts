import { GraphQLObjectType, GraphQLSchema } from "graphql";

// Queries
import { GET_ALL_USERS } from "./queries/User";

// Mutations
import { CREATE_USER } from "./mutations/User";

const RQuery = new GraphQLObjectType({
	name: "RQuery",
	fields: {
		getAllUsers: GET_ALL_USERS
	}
});

const RMutation = new GraphQLObjectType({
	name: "RMutation",
	fields: {
		creteUser: CREATE_USER
	}
});

export const schema = new GraphQLSchema({
	query: RQuery,
	mutation: RMutation 
});