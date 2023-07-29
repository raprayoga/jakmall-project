import { keyframes, styled } from 'styled-components'
import { PlaceHolderProps } from './Input'

const StyledInput = styled.input<{ color?: string }>`
  height: 45px;
  flex-shrink: 0;
  border: 1px solid #ccc;
  border-color: ${(props) => props.color};
  background: #fff;
  color: #2d2a40;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 15px;
  padding-right: 30px;
  padding-top: 15px;
  &:focus {
    outline-color: ${(props) => props.color};
  }

  @media (max-width: 992px) {
    height: 41px;
  }

  @media (max-width: 600px) {
    height: 37px;
  }
`

const StyledInputWraper = styled.div`
  position: relative;
  width: fit-content;
`

const PlaceHolder = styled.p<PlaceHolderProps>`
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: auto;
  color: ${(props) => props.color};
  opacity: 0.4000000059604645;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 0;
  animation-name: ${(props) => (props.isOnFocus || props.value ? toTop : '')};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
`

const toTop = keyframes`
  from {
    left: 15px;
    top: 50%;
    font-size: 16px;
  }

  to {
    top: 30%;
    font-size: 13px;
  }
`

export { StyledInput, StyledInputWraper, PlaceHolder }