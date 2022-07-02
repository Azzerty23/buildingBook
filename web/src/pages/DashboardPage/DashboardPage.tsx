// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-4 sm:px-0">
          <div className="rounded-lg h-96">
            <ul>
              <li>List of buildings</li>
              <li>Last view building (project)</li>
              <li>Received messages</li>
              <li>Next Tasks</li>
              <li>Material Management</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
