import { useState } from 'react'

import { ClockIcon } from '@heroicons/react/solid'

import Feed from 'src/components/Feed/Feed'
import SlideOver from 'src/components/SlideOver/SlideOver'

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
  const [open, setOpen] = useState(false)
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
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="inline-flex mt-4 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <ClockIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Voir l'historique
      </button>
      <SlideOver
        title={building.name}
        open={open}
        setOpen={setOpen}
        content={<Feed />}
      />
    </>
  )
}

export default Building
