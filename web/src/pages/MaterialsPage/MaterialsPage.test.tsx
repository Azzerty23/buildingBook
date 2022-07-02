import { render } from '@redwoodjs/testing/web'

import MaterialsPage from './MaterialsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MaterialsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MaterialsPage />)
    }).not.toThrow()
  })
})
