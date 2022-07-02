import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BuildingLayoutProps = {
  children: React.ReactNode
}

const BuildingsLayout = ({ children }: BuildingLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.adminBuildings()}
            className="rw-link"
          >
            Buildings
          </Link>
        </h1>
        <Link
          to={routes.adminNewBuilding()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Building
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BuildingsLayout
