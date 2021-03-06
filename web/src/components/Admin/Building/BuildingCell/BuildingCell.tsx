import type { FindBuildingById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Building from 'src/components/Admin/Building/Building'

export const QUERY = gql`
  query FindBuildingById($id: Int!) {
    building: building(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Building not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ building }: CellSuccessProps<FindBuildingById>) => {
  return <Building building={building} />
}
