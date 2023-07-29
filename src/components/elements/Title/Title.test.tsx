import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from './index'

const text = 'TITLE'

describe('Render Title', () => {
  test('sould render Title correctly', () => {
    render(<Title>{text}</Title>)

    const titleElement = screen.getByText(text)
    expect(titleElement).toBeInTheDocument()
  })
})
