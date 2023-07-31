import { keyframes, styled } from 'styled-components'
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
      props.isdisabled || props.isLoading ? '' : '#ff8a00d1'};
    cursor: ${(props) =>
      props.isdisabled || props.isLoading ? 'default' : 'pointer'};
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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledSvgLoading = styled.svg`
  width: 60%;
  height: 60%;
  display: inline;
  margin: auto;
  vertical-align: middle;
  color-white;
  animation: ${spin} 1s linear infinite;
`

export { StyledButton, StyledSvgLoading }
