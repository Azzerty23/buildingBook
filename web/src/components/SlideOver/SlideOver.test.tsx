import { render } from '@redwoodjs/testing/web'

import SlideOver from './SlideOver'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SlideOver', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SlideOver />)
    }).not.toThrow()
  })
})
