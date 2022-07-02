export const schema = gql`
  type Company {
    id: Int!
    name: String!
    type: String!
    User: [User]!
    Buildings: [Building]!
    createdAt: DateTime!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    type: String!
  }

  input UpdateCompanyInput {
    name: String
    type: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
