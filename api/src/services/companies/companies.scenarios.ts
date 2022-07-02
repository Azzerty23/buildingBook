import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: { data: { name: 'String', type: 'String' } },
    two: { data: { name: 'String', type: 'String' } },
  },
})

export type StandardScenario = typeof standard
