import React from 'react'
import { Button } from './Button'
import { render, screen, fireEvent } from '../../../../test-utils'

describe('Button Component', () => {
  it('should render the button with default props', () => {
    render(<Button>Test Button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Test Button' })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Test Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should apply the correct size styles', () => {
    render(<Button size="lg">Large Button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Large Button' })
    expect(buttonElement).toHaveClass('h-10')
  })

  it('should handle click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Clickable Button' })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Disabled Button' })
    expect(buttonElement).toBeDisabled()
  })
})
