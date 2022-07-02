export const schema = gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    phone: String!
    role: Role!
    company: Company
    companyId: Int
    Post: [Post]!
    createdAt: DateTime!
  }

  enum Role {
    PUBLIC_USER
    CONSTRUCTOR
    ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    firstname: String!
    lastname: String!
    email: String!
    phone: String!
    role: Role!
    companyId: Int
  }

  input UpdateUserInput {
    firstname: String
    lastname: String
    email: String
    phone: String
    role: Role
    companyId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
