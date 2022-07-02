import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CompanyPage = () => {
  return (
    <>
      <MetaTags title="Company" description="Company page" />

      <h1>CompanyPage</h1>
      <p>
        Find me in <code>./web/src/pages/CompanyPage/CompanyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>company</code>, link to me with `
        <Link to={routes.company()}>Company</Link>`
      </p>
    </>
  )
}

export default CompanyPage
