import type { FindMaterialById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Material from 'src/components/Admin/Material/Material'

export const QUERY = gql`
  query FindMaterialById($id: Int!) {
    material: material(id: $id) {
      id
      name
      type
      quantity
      unit
      status
      price
      expected_delivery_date
      delivery_date
      taskId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Material not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ material }: CellSuccessProps<FindMaterialById>) => {
  return <Material material={material} />
}
