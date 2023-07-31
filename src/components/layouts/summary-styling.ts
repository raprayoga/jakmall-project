import { styled } from 'styled-components'

const StyledTitle = styled.h3`
  color: #ff8a00;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 992px) {
    font-size: 20px;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  border-left: 1px solid #ff8a0033;

  @media (max-width: 600px) {
    border: none;
    padding: 0;
    margin-top: 30px;
  }
`

const StyledCountItem = styled.p`
  color: #2d2a40cc;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`

const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ff8a00;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 24px 0 30px 0;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const StyledCalculateFee = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 12px 0 12px 0;

  & > p:first-child {
    opacity: 0.6;
  }

  & > p:last-child {
    font-weight: 700;
  }

  @media (max-width: 992px) {
    font-size: 12px;
  }
`

export {
  StyledTitle,
  StyledContainer,
  StyledCountItem,
  StyledTotal,
  StyledCalculateFee,
}
