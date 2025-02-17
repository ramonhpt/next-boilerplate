import React from 'react'
import { render } from '@testing-library/react'
import { Gretting } from './Greeting'

describe('Greeting Component', () => {
  it('should render', () => {
    render(<Gretting />)
  })

  it('should match snapshot', () => {
    const { container } = render(<Gretting />)
    expect(container).toMatchSnapshot()
  })
})
