export const schema = gql`
  type Task {
    id: Int!
    name: String!
    type: String!
    start_date: DateTime!
    end_date: DateTime!
    materials: [Material]!
    successorId: Int
    successor: Task
    predecessor: Task
    createdAt: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    name: String!
    type: String!
    start_date: DateTime!
    end_date: DateTime!
    successorId: Int
  }

  input UpdateTaskInput {
    name: String
    type: String
    start_date: DateTime
    end_date: DateTime
    successorId: Int
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
