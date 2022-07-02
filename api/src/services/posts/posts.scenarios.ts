import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        content: 'String',
        author: {
          create: {
            firstname: 'String',
            lastname: 'String',
            email: 'String8438177',
            phone: 'String',
            company: { create: { name: 'String', type: 'String' } },
          },
        },
        building: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        content: 'String',
        author: {
          create: {
            firstname: 'String',
            lastname: 'String',
            email: 'String6406719',
            phone: 'String',
            company: { create: { name: 'String', type: 'String' } },
          },
        },
        building: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
