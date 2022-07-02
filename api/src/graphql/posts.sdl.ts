export const schema = gql`
  type Post {
    id: Int!
    content: String!
    author: User!
    building: Building!
    buildingId: Int!
    userId: Int!
    Comment: [Comment]!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    content: String!
    buildingId: Int!
    userId: Int!
  }

  input UpdatePostInput {
    content: String
    buildingId: Int
    userId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
