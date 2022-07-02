// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ContentHeader from 'src/components/ContentHeader/ContentHeader'
import Stats from 'src/components/Stats/Stats'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <ContentHeader title="Dashboard" />
      <Stats />
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
