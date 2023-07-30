import { styled } from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  rowgap: 10px;
`

const StyledLeftForm = styled.div`
  row-gap: 10px;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
`

const StyledRightForm = styled.div`
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
  }
`

export { StyledContainer, StyledForm, StyledLeftForm, StyledRightForm }
