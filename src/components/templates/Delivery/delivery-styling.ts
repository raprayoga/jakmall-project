import { styled } from 'styled-components'

const StyledMain = styled.main`
  background-color: #fff;
  padding: 40px;
  position: relative;
  top: -35px;

  @media (max-width: 992px) {
    top: -25px;
  }

  @media (max-width: 600px) {
    top: -15px;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 500px;

  & > div:first-child {
    width: 75%;
  }

  & > div:last-child {
    width: 23%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    & > div:first-child {
      width: 100%;
    }

    & > div:last-child {
      width: 100%;
    }
  }
`

const StyledTitleContaner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 23px 36px 0;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;

    & > label > p {
      font-size: 12px;
    }
  }
`

export { StyledMain, StyledContainer, StyledTitleContaner }
