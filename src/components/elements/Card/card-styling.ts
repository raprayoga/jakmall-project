import { styled } from 'styled-components'
import { CardProps } from './Card'

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

export { StyledCard }
