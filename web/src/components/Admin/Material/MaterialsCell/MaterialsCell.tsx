import type { FindMaterials } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Materials from 'src/components/Admin/Material/Materials'

export const QUERY = gql`
  query FindMaterials {
    materials {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No materials yet. '}
      <Link
        to={routes.adminNewMaterial()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ materials }: CellSuccessProps<FindMaterials>) => {
  return <Materials materials={materials} />
}
