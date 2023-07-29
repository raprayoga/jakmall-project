import { keyframes, styled } from 'styled-components'
import { PlaceHolder } from '../Input/input-styling'

const StyledTextarea = styled.textarea<{ color?: string }>`
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
  padding-top: 20px;
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

const TextareaPlaceHolder = styled(PlaceHolder)`
  left: 15px;
  top: 30px;
  color: ${(props) => props.color};
  animation-name: ${(props) => (props.isOnFocus || props.value ? toTop : '')};
`

const toTop = keyframes`
  from {
    left: 15px;
    top: 30px;
    font-size: 16px;
  }

  to {
    top: 15px;
    font-size: 13px;
  }
`

export { StyledTextarea, TextareaPlaceHolder }
