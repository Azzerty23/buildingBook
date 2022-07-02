import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        content: 'String',
        post: {
          create: {
            content: 'String',
            author: {
              create: {
                firstname: 'String',
                lastname: 'String',
                email: 'String4238161',
                phone: 'String',
                company: { create: { name: 'String', type: 'String' } },
              },
            },
            building: { create: { name: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        post: {
          create: {
            content: 'String',
            author: {
              create: {
                firstname: 'String',
                lastname: 'String',
                email: 'String8402003',
                phone: 'String',
                company: { create: { name: 'String', type: 'String' } },
              },
            },
            building: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
