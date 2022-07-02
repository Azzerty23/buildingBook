import { Fragment } from 'react'

// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Header />
      <Footer />
    </>
  )
}

export default HomePage
