import { render } from '@redwoodjs/testing/web'

import ContentHeader from './ContentHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContentHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentHeader />)
    }).not.toThrow()
  })
})
