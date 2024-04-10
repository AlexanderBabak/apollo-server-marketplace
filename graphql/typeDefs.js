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

type FeatureToggle {
    id: String
    showSales: Boolean
    showOldCollection: Boolean
}

type Product {
    id: String
    title: String,
    description: String,
    price: Float,
    rating: Int,
    imageURL: String,
    category: String
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

input FeatureSwitch {
    showSales: Boolean
    showOldCollection: Boolean
}

type Query {
    getUserById(ID: ID!): User
    getUserByEmail(email: String!): User
    getFeatureToggle: FeatureToggle
    getAllProducts: [Product]
    getProductById(ID: ID!): Product
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
    changeUserRole(ID: ID!, role: String!): String
    changeFeatureToggle(values: FeatureSwitch): FeatureToggle
}

`