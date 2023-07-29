import React from 'react'
import { styled } from 'styled-components'

const StyledTitle = styled.div`
  color: #ff8a00;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: underline;
  text-decoration-color: #eee;
`

function Title({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <StyledTitle {...props} />
}

export { Title }
