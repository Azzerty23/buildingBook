import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        name: 'String',
        type: 'String',
        start_date: '2022-07-02T09:15:06Z',
        end_date: '2022-07-02T09:15:06Z',
      },
    },
    two: {
      data: {
        name: 'String',
        type: 'String',
        start_date: '2022-07-02T09:15:06Z',
        end_date: '2022-07-02T09:15:06Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
