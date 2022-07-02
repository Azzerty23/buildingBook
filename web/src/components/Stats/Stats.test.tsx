import { render } from '@redwoodjs/testing/web'

import Stats from './Stats'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Stats', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Stats />)
    }).not.toThrow()
  })
})
