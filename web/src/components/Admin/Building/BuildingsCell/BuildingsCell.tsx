import type { FindBuildings } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Buildings from 'src/components/Admin/Building/Buildings'

export const QUERY = gql`
  query FindBuildings {
    buildings {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No buildings yet. '}
      <Link
        to={routes.adminNewBuilding()}
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

export const Success = ({ buildings }: CellSuccessProps<FindBuildings>) => {
  return <Buildings buildings={buildings} />
}
