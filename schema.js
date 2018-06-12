const schema = `
	type Query {
		getUserInfo(handle: String!): User!
	}
`;

export { schema };