const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: String
    username: String
    email: String
    password: String
    role: String
    token: String
}

input RegisterInput {
    username: String
    email: String
    password: String
    confirmPassword: String
}

input LoginInput {
    email: String
    password: String 
}

type Query {
    getUserById(ID: ID!): User
    getUserByEmail(email: String!): User
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`