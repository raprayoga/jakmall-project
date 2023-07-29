import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './index'

const placeholder = 'Name'
const inputText = 'Inputed text'

describe('Render Input', () => {
  test('sould render input correctly', async () => {
    const { rerender } = render(<Input placeholder={placeholder} />)

    const inputElement = screen.getByTestId('input-element')
    fireEvent.focus(inputElement)
    fireEvent.change(inputElement, {
      target: {
        value: inputText,
      },
    })
    expect(inputElement).toHaveValue(inputText)

    rerender(<Input placeholder={placeholder} variant="valid" />)

    const iconCheckElement = screen.getByTestId('chekIcon-element')
    expect(iconCheckElement).toBeInTheDocument()

    rerender(<Input placeholder={placeholder} variant="invalid" />)

    const closeCheckElement = screen.getByTestId('closeIcon-element')
    expect(closeCheckElement).toBeInTheDocument()
  })
})
