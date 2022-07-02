import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MaterialCreateArgs>({
  material: {
    one: {
      data: {
        name: 'String',
        type: 'String',
        quantity: 3025830,
        unit: 'String',
        price: 5423889,
      },
    },
    two: {
      data: {
        name: 'String',
        type: 'String',
        quantity: 7718291,
        unit: 'String',
        price: 6958546,
      },
    },
  },
})

export type StandardScenario = typeof standard
