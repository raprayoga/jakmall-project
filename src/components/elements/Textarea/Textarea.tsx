import React, { useState, useMemo } from 'react'
import Icon from '../IconValidation'
import { StyledInputWraper } from '../Input/input-styling'
import {
  StyledTextarea,
  TextareaPlaceHolder as PlaceHolder,
} from './textarea-styling'
import getVariantColor from '@/utils/variantColor'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: string
}

export interface PlaceHolderProps {
  isOnFocus: boolean
  value: string | number | readonly string[] | undefined
}

const Textarea = ({
  value,
  placeholder,
  variant = 'default',
  ...props
}: TextareaProps) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const color = useMemo(() => {
    const variantColor = getVariantColor(variant)
    return variantColor
  }, [variant])

  return (
    <StyledInputWraper>
      <StyledTextarea
        data-testid="textarea-element"
        color={color}
        value={value}
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
Textarea.displayName = 'Textarea'

export { Textarea }
