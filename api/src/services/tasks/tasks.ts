import type {
  QueryResolvers,
  MutationResolvers,
  TaskResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tasks: QueryResolvers['tasks'] = () => {
  return db.task.findMany()
}

export const task: QueryResolvers['task'] = ({ id }) => {
  return db.task.findUnique({
    where: { id },
  })
}

export const createTask: MutationResolvers['createTask'] = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask: MutationResolvers['updateTask'] = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask: MutationResolvers['deleteTask'] = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task: TaskResolvers = {
  materials: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).materials(),
  successor: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).successor(),
  predecessor: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).predecessor(),
}
