import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './index'

const text = '5'

describe('Render Badge', () => {
  test('sould render badge correctly', () => {
    const handleClick = jest.fn()
    const handleClickDisabled = jest.fn()
    const { rerender } = render(<Badge onClick={handleClick}>{text}</Badge>)

    const badgeElement = screen.getByText(text)
    expect(badgeElement).toBeInTheDocument()

    fireEvent.click(badgeElement)
    expect(handleClick).toBeCalled()

    rerender(
      <Badge isactive onClick={handleClickDisabled}>
        {text}
      </Badge>
    )
    fireEvent.click(badgeElement)
    expect(handleClickDisabled).not.toBeCalled
  })
})
