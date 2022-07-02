export const schema = gql`
  type Material {
    id: Int!
    name: String!
    type: String!
    quantity: Int!
    unit: String!
    status: MaterialStatus!
    price: Int!
    expected_delivery_date: DateTime
    delivery_date: DateTime
    Task: Task
    taskId: Int
    createdAt: DateTime!
  }

  enum MaterialStatus {
    TO_ORDER
    DELIVERING
    DELIVERED
  }

  type Query {
    materials: [Material!]! @requireAuth
    material(id: Int!): Material @requireAuth
  }

  input CreateMaterialInput {
    name: String!
    type: String!
    quantity: Int!
    unit: String!
    status: MaterialStatus!
    price: Int!
    expected_delivery_date: DateTime
    delivery_date: DateTime
    taskId: Int
  }

  input UpdateMaterialInput {
    name: String
    type: String
    quantity: Int
    unit: String
    status: MaterialStatus
    price: Int
    expected_delivery_date: DateTime
    delivery_date: DateTime
    taskId: Int
  }

  type Mutation {
    createMaterial(input: CreateMaterialInput!): Material! @requireAuth
    updateMaterial(id: Int!, input: UpdateMaterialInput!): Material!
      @requireAuth
    deleteMaterial(id: Int!): Material! @requireAuth
  }
`
