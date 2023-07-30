import { styled } from 'styled-components'

const StyledBadge = styled.div<{ isactive: boolean }>`
  background-color: ${(props) => (props.isactive ? '#FF8A00' : '#ff8a0033')};
  color: ${(props) => (props.isactive ? '#FFF' : '#FF8A00')};
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 15px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    font-size: 12px;
  }
`

export { StyledBadge }
