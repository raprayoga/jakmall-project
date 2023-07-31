import { styled } from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledDescript = styled.div`
  margin-top: 26px;
  margin-bottom: 60px;

  & > p {
    margin: 10px 0 10px 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:last-child {
      opacity: 0.6;
    }
  }
`

const StyledButtonToHome = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.6;
  cusor: pointer;
`

export { StyledContainer, StyledDescript, StyledButtonToHome }
