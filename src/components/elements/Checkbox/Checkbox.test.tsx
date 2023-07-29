import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox, { StyledCheckboxWraper } from './index'

describe('Render Checkbox', () => {
  test('sould render checkbox correctly', () => {
    const { rerender } = render(
      <StyledCheckboxWraper style={{ width: '100px' }}>
        LABEL
        <Checkbox variant="default" data-testid="checkboxdefault-element" />
      </StyledCheckboxWraper>
    )
    const checkboxDefaultElement = screen.getByTestId('checkboxdefault-element')
    expect(checkboxDefaultElement).toBeInTheDocument()

    rerender(
      <StyledCheckboxWraper style={{ width: '100px' }}>
        LABEL
        <Checkbox variant="valid" data-testid="checkboxvalid-element" />
      </StyledCheckboxWraper>
    )
    const checkboxValidElement = screen.getByTestId('checkboxvalid-element')
    expect(checkboxValidElement).toBeInTheDocument()

    rerender(
      <StyledCheckboxWraper style={{ width: '100px' }}>
        LABEL
        <Checkbox
          variant="invalid"
          checked
          data-testid="checkboxinvali-element"
        />
      </StyledCheckboxWraper>
    )
    const checkboxInvalidElement = screen.getByTestId('checkboxinvali-element')
    expect(checkboxInvalidElement).toBeInTheDocument()

    rerender(
      <StyledCheckboxWraper style={{ width: '100px' }}>
        LABEL
        <Checkbox checked data-testid="checkbox-element" />
      </StyledCheckboxWraper>
    )
    const checkboxElement = screen.getByTestId('checkbox-element')
    expect(checkboxElement).toBeInTheDocument()
  })
})
