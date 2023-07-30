import { styled } from 'styled-components'

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const StyledCheckmark = styled.span<{ checked?: boolean; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border: solid ${(props) => props.color};
  background-color: ${(props) => (props.checked ? props.color : '')};

  &:after {
    content: '';
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};
    left: 4px;
    top: 0px;
    width: 3px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  @media (max-width: 992px) {
    height: 14px;
    width: 14px;

    &:after {
      left: 2px;
      top: -2px;
      width: 2px;
      height: 8px;
    }
  }

  @media (max-width: 600px) {
    height: 12px;
    width: 12px;

    &:after {
      left: 1px;
      top: -3px;
      width: 2px;
      height: 7px;
    }
  }
`

const StyledCheckboxWraper = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  @media (max-width: 992px) {
    padding-left: 26px;
  }

  @media (max-width: 600px) {
    padding-left: 22px;
  }
`
export { StyledCheckbox, StyledCheckmark, StyledCheckboxWraper }
