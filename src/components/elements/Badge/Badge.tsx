import React from 'react'
import { StyledBadge } from './badge-styling'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isactive?: boolean
  onClick?: () => void
}

function Badge({
  isactive = false,
  onClick = () => null,
  ...props
}: BadgeProps) {
  const handleClick = () => {
    if (!isactive) onClick()
  }

  return <StyledBadge isactive={isactive} onClick={handleClick} {...props} />
}

export { Badge }
