import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Textarea from './index'

const placeholder = 'Name'
const textareaText = 'Inputed text'

describe('Render Textarea', () => {
  test('sould render textarea correctly', async () => {
    const { rerender } = render(<Textarea placeholder={placeholder} />)

    const textareaElement = screen.getByTestId('textarea-element')
    fireEvent.focus(textareaElement)
    fireEvent.change(textareaElement, {
      target: {
        value: textareaText,
      },
    })
    expect(textareaElement).toHaveValue(textareaText)

    rerender(<Textarea placeholder={placeholder} variant="valid" />)

    const iconCheckElement = screen.getByTestId('chekIcon-element')
    expect(iconCheckElement).toBeInTheDocument()

    rerender(<Textarea placeholder={placeholder} variant="invalid" />)

    const closeCheckElement = screen.getByTestId('closeIcon-element')
    expect(closeCheckElement).toBeInTheDocument()
  })
})
