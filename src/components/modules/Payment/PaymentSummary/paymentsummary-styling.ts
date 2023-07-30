import { styled } from 'styled-components'

const StyledEstimateHr = styled.hr`
  margin: 21px 0 21px 0;
  width: 81px;
  border-color: #d8d8d8;
`

const StyledEstimateWraper = styled.div`
  & > p:first-child {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > p:last-child {
    margin-top: 4px;
    color: #1bd97b;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export { StyledEstimateHr, StyledEstimateWraper }
