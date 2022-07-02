export const schema = gql`
  type Building {
    id: Int!
    name: String!
    stakeholders: [Company]!
    Post: [Post]!
    createdAt: DateTime!
  }

  type Query {
    buildings: [Building!]! @requireAuth
    building(id: Int!): Building @requireAuth
  }

  input CreateBuildingInput {
    name: String!
  }

  input UpdateBuildingInput {
    name: String
  }

  type Mutation {
    createBuilding(input: CreateBuildingInput!): Building! @requireAuth
    updateBuilding(id: Int!, input: UpdateBuildingInput!): Building!
      @requireAuth
    deleteBuilding(id: Int!): Building! @requireAuth
  }
`
