import { styled } from 'styled-components'

const StyledContainer = styled.div`
  width: 48%;

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

export { StyledContainer, StyledForm }
