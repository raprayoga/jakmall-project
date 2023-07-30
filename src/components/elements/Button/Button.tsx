import React from 'react'
import { StyledButton } from './button-styling'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isdisabled?: boolean
  onClick: () => void
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isdisabled = false, onClick, ...props }, ref) => {
    const handleClick = () => {
      if (!isdisabled) onClick()
    }

    return (
      <StyledButton
        ref={ref}
        isdisabled={isdisabled}
        onClick={handleClick}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
