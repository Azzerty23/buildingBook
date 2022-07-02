import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_MATERIAL_MUTATION = gql`
  mutation DeleteMaterialMutation($id: Int!) {
    deleteMaterial(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Material = ({ material }) => {
  const [deleteMaterial] = useMutation(DELETE_MATERIAL_MUTATION, {
    onCompleted: () => {
      toast.success('Material deleted')
      navigate(routes.adminMaterials())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete material ' + id + '?')) {
      deleteMaterial({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Material {material.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{material.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{material.name}</td>
            </tr><tr>
              <th>Type</th>
              <td>{material.type}</td>
            </tr><tr>
              <th>Quantity</th>
              <td>{material.quantity}</td>
            </tr><tr>
              <th>Unit</th>
              <td>{material.unit}</td>
            </tr><tr>
              <th>Status</th>
              <td>{formatEnum(material.status)}</td>
            </tr><tr>
              <th>Price</th>
              <td>{material.price}</td>
            </tr><tr>
              <th>Expected delivery date</th>
              <td>{timeTag(material.expected_delivery_date)}</td>
            </tr><tr>
              <th>Delivery date</th>
              <td>{timeTag(material.delivery_date)}</td>
            </tr><tr>
              <th>Task id</th>
              <td>{material.taskId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(material.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditMaterial({ id: material.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(material.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Material
