import { styled } from 'styled-components'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const StyledCheck = styled(CheckOutlinedIcon)`
  color: #1bd97b;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  width: 18px !important;
  height: 18px !important;

  @media (max-width: 992px) {
    width: 16px !important;
    height: 16px !important;
  }

  @media (max-width: 600px) {
    width: 14px !important;
    height: 14px !important;
  }
`

const StyledClose = styled(CloseOutlinedIcon)`
  color: #ff8a00;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  width: 18px !important;
  height: 18px !important;

  @media (max-width: 992px) {
    width: 16px !important;
    height: 16px !important;
  }

  @media (max-width: 600px) {
    width: 14px !important;
    height: 14px !important;
  }
`
export { StyledCheck, StyledClose }
