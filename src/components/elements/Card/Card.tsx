import getVariantColor from '@/utils/variantColor'
import React, { useMemo } from 'react'
import { StyledCard } from './card-styling'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string
  onClick?: () => void
}

function Card({
  variant = 'default',
  onClick = () => null,
  ...props
}: CardProps) {
  const color = useMemo(() => {
    const variantColor = getVariantColor(variant)
    return variantColor
  }, [variant])

  return <StyledCard color={color} onClick={onClick} {...props} />
}

export { Card }
