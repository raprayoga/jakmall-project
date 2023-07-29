import React, { useState, useMemo } from 'react'
import { PlaceHolder, StyledInput, StyledInputWraper } from './input-styling'
import getVariantColor from '@/utils/variantColor'
import Icon from '../IconValidation'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string
}

export interface PlaceHolderProps {
  isOnFocus: boolean
  value: string | number | readonly string[] | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, placeholder, variant = 'default', ...props }, ref) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)

    const color = useMemo(() => {
      const variantColor = getVariantColor(variant)
      return variantColor
    }, [variant])

    return (
      <StyledInputWraper>
        <StyledInput
          data-testid="input-element"
          color={color}
          value={value}
          type={type}
          ref={ref}
          {...props}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
        />
        <PlaceHolder isOnFocus={onFocus} value={value} color={color}>
          {placeholder}
        </PlaceHolder>
        <Icon variant={variant} />
      </StyledInputWraper>
    )
  }
)
Input.displayName = 'Input'

export { Input }
