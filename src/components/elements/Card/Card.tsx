import getVariantColor from '@/utils/variantColor'
import React, { useMemo } from 'react'
import { styled } from 'styled-components'

const StyledCard = styled.div<CardProps>`
  display: flex;
  align-items: center;
  height: 60px;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.color};
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 992px) {
    height: 56px;
  }

  @media (max-width: 600px) {
    height: 52px;
  }
`

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
