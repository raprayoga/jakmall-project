import React, { useState, useMemo, useEffect } from 'react'
import Icon from '@/components/elements/IconValidation'
import {
  StyledTextarea,
  TextareaPlaceHolder as PlaceHolder,
  CharAvail,
  StyledTextareaWraper,
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
  maxLength,
  ...props
}: TextareaProps) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)
  const [charAvail, setCharAvail] = useState<number>(maxLength || 0)

  const color = useMemo(() => {
    const variantColor = getVariantColor(variant)
    return variantColor
  }, [variant])

  useEffect(() => {
    if (maxLength && value) setCharAvail(maxLength - value.toString().length)
  }, [value])

  return (
    <StyledTextareaWraper>
      <StyledTextarea
        data-testid="textarea-element"
        color={color}
        value={value}
        {...props}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        maxLength={maxLength}
      />
      <PlaceHolder isOnFocus={onFocus} value={value} color={color}>
        {placeholder}
      </PlaceHolder>
      <Icon variant={variant} />
      {maxLength && <CharAvail>{charAvail}</CharAvail>}
    </StyledTextareaWraper>
  )
}
Textarea.displayName = 'Textarea'

export { Textarea }
