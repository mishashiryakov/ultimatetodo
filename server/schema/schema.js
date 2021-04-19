const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;

const Users = require('../models/user');
const Todos = require('../models/todo');

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
		todos: {
			type: new GraphQLList(TodoType),
			resolve({ id }, args) {
				return Todos.find({ userId: id });
			},
		},
	}),
});

const TodoType = new GraphQLObjectType({
	name: 'Todo',
	fields: () => ({
		id: { type: GraphQLID },
		type: { type: GraphQLString },
		year: { type: GraphQLString },
		month: { type: GraphQLString },
		day: { type: GraphQLString },
		title: { type: GraphQLString },
		backgroundColor: { type: GraphQLString },
		color: { type: GraphQLString },
		user: {
			type: UserType,
			resolve({ userId }, args) {
				return Users.findById(userId);
			}
		}
	}),
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: {
				username: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve(parent, { username, password }) {
				const user = new Users({
					username,
					password
				});
				return user.save()
			}
		}
	}
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
	user: {
		type: new GraphQLList(UserType),
		args: { username: { type: GraphQLString } },
		resolve(parent, { username }) {
			return Users.find({username: { $regex: username, $options: "i" }})
		}
	},
	users: {
		type: new GraphQLList(UserType),
		resolve(parent, args) {
			return Users.find({});
		}
	},
	userLogin: {
		type: new GraphQLList(UserType),
		args: {
			username: { type: GraphQLString },
			password: { type: GraphQLString },
		},
		resolve(parent, { username, password }) {
			return Users.find({ username: { $regex: username, $options: "i" }, password });
		}
	},
	}
});


module.exports = new GraphQLSchema({
	query: Query,
	mutation: Mutation,
});
