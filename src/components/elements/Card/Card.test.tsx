import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './index'

const text = '5'

describe('Render Card', () => {
  test('sould render card correctly', () => {
    const handleClick = jest.fn()
    const { rerender } = render(<Card onClick={handleClick}>{text}</Card>)

    const cardElement = screen.getByText(text)
    expect(cardElement).toBeInTheDocument()

    fireEvent.click(cardElement)
    expect(handleClick).toBeCalled()

    rerender(<Card variant="valid">{text}</Card>)
    expect(cardElement).toBeInTheDocument()
    fireEvent.click(cardElement)
    expect(handleClick).toBeCalled()

    rerender(<Card variant="invalid">{text}</Card>)
    expect(cardElement).toBeInTheDocument()
  })
})
