import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CalendarPage = () => {
  return (
    <>
      <MetaTags title="Calendar" description="Calendar page" />

      <h1>CalendarPage</h1>
      <p>
        Find me in <code>./web/src/pages/CalendarPage/CalendarPage.tsx</code>
      </p>
      <p>
        My default route is named <code>calendar</code>, link to me with `
        <Link to={routes.calendar()}>Calendar</Link>`
      </p>
    </>
  )
}

export default CalendarPage
