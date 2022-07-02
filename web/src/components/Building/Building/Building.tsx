const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const Building = ({ building }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Building {building.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{building.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{building.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(building.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Building
