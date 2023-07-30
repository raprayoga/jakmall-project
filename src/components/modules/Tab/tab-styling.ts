import { styled } from 'styled-components'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

const StyledTabWraper = styled.div`
  width: 500px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #fffae6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  margin: auto;
  position: relative;
  z-index: 99;

  @media (max-width: 992px) {
    width: 400px;
    height: 50px;
    border-radius: 25px;
    padding-left: 25px;
    padding-right: 25px;
  }

  @media (max-width: 600px) {
    width: 280px;
    height: 35px;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

const StyledTabItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 992px) {
    gap: 6px;
  }

  @media (max-width: 600px) {
    gap: 4px;
  }
`

const StyledChevronRight = styled(ChevronRightOutlinedIcon)`
  color: #ff8a00;
  width: 70px !important;
  height: auto !important;
  padding-left: 22px;
  padding-right: 22px;

  @media (max-width: 992px) {
    width: 50px !important;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media (max-width: 600px) {
    width: 25px !important;
    padding-left: 6px;
    padding-right: 6px;
  }
`

const StyledBadgeTitle = styled.p`
  color: #ff8a00;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export { StyledTabWraper, StyledTabItem, StyledChevronRight, StyledBadgeTitle }
