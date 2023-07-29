import React, { useMemo } from 'react'
import {
  StyledCheckbox,
  StyledCheckboxWraper,
  StyledCheckmark,
} from './checkbox-styling'

const getVariantColor = (variant: string) => {
  switch (variant) {
    case 'default':
      return '#ccc'

    case 'valid':
      return '#1BD97B'

    case 'invalid':
      return '#FF8A00'

    default:
      return '#ccc'
  }
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ checked, variant = 'default', ...props }, ref) => {
    const color = useMemo(() => {
      const variantColor = getVariantColor(variant)
      return variantColor
    }, [variant])

    return (
      <>
        <StyledCheckbox {...props} ref={ref} checked={checked} />
        <StyledCheckmark checked={checked} color={color} />
      </>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
