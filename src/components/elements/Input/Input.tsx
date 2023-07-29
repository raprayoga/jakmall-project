import React, { useState, useMemo } from 'react'
import {
  PlaceHolder,
  StyledCheck,
  StyledClose,
  StyledInput,
  StyledInputWraper,
} from './input-styling'

const getVariantColor = (variant: string) => {
  switch (variant) {
    case 'default':
      return '#ccc'

    case 'valid':
      return '#1BD97B'

    case 'invalid':
      return '#FF8A00'
  }
}

const Icon = ({ variant }: { variant: string }) => {
  switch (variant) {
    case 'default':
      return <></>

    case 'valid':
      return <StyledCheck data-testid="chekIcon-element" />

    case 'invalid':
      return <StyledClose data-testid="closeIcon-element" />
  }
}

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
