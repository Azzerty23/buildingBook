import type { EditMaterialById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MaterialForm from 'src/components/Admin/Material/MaterialForm'

export const QUERY = gql`
  query EditMaterialById($id: Int!) {
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
const UPDATE_MATERIAL_MUTATION = gql`
  mutation UpdateMaterialMutation($id: Int!, $input: UpdateMaterialInput!) {
    updateMaterial(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ material }: CellSuccessProps<EditMaterialById>) => {
  const [updateMaterial, { loading, error }] = useMutation(UPDATE_MATERIAL_MUTATION, {
    onCompleted: () => {
      toast.success('Material updated')
      navigate(routes.adminMaterials())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { taskId: parseInt(input.taskId), })
    updateMaterial({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Material {material.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MaterialForm material={material} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
