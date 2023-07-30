import Card from '@/components/elements/Card'
import { styled } from 'styled-components'

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const StyledRadioCard = styled(Card)`
  flex-shrink: 0;
  cursor: pointer;
  background: ${(props) =>
    props.variant === 'valid' ? 'rgba(27, 217, 123, 0.1)' : ''};
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 2px;
  opacity: ${(props) => (props.variant === 'valid' ? '1' : '0.6')};

  & > p:first-child {
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & > p:last-child {
    color: #2d2a40;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`

const StyledRadioWraper = styled.div`
  display: flex;
  row-gap: 10px;
  column-gap: 10px;
  flex-wrap: wrap;
`

const RadioButton = styled.label`
  width: 180px;
  height: 60px;

  @media (max-width: 600px) {
    width: 45%;
    height: 70px;
  }
`

const StyledErrorMessage = styled.span`
  color: #ff8a00;
  font-weght: 700;
`

export {
  StyledRadio,
  StyledRadioCard,
  StyledRadioWraper,
  RadioButton,
  StyledErrorMessage,
}
