import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstname: 'String',
        lastname: 'String',
        email: 'String5959728',
        phone: 'String',
        company: { create: { name: 'String', type: 'String' } },
      },
    },
    two: {
      data: {
        firstname: 'String',
        lastname: 'String',
        email: 'String2857913',
        phone: 'String',
        company: { create: { name: 'String', type: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
