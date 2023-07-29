import React from 'react'
import { styled } from 'styled-components'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isactive?: boolean
  onClick: () => void
}

const StyledBadge = styled.div<BadgeProps>`
  background-color: ${(props) => (props.isactive ? '#FF8A00' : '#ff8a0033')};
  color: ${(props) => (props.isactive ? '#FFF' : '#FF8A00')};
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 15px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: ${(props) => (props.isactive ? 'default' : 'pointer')};
  }

  @media (max-width: 992px) {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    font-size: 12px;
  }
`

function Badge({ isactive = false, onClick, ...props }: BadgeProps) {
  const handleClick = () => {
    if (!isactive) onClick()
  }

  return <StyledBadge isactive={isactive} onClick={handleClick} {...props} />
}

export { Badge }
