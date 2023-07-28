import React from 'react'
import { styled } from 'styled-components'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isdisabled?: boolean
  onClick: () => void
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isdisabled ? '#6D6D6D' : '#FF8A00')};
  height: 60px;
  border-radius: 2px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.isdisabled ? '#6D6D6D' : '#ff8a00d1'};
    cursor: ${(props) => (props.isdisabled ? 'default' : 'pointer')};
  }

  @media (max-width: 992px) {
    height: 54px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    height: 50px;
    font-size: 14px;
  }
`

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
