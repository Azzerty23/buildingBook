import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MaterialsPage = () => {
  return (
    <>
      <MetaTags title="Materials" description="Materials page" />

      <h1>MaterialsPage</h1>
      <p>
        Find me in <code>./web/src/pages/MaterialsPage/MaterialsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>materials</code>, link to me with `
        <Link to={routes.materials()}>Materials</Link>`
      </p>
    </>
  )
}

export default MaterialsPage
