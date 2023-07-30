import { styled } from 'styled-components'
import { ButtonProps } from './Button'

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

export { StyledButton }
