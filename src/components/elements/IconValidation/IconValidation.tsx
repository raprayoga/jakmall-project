import { StyledCheck, StyledClose } from './iconValidation-styling'

const Icon = ({ variant }: { variant: string }) => {
  switch (variant) {
    case 'default':
      return <></>

    case 'valid':
      return <StyledCheck data-testid="chekIcon-element" />

    case 'invalid':
      return <StyledClose data-testid="closeIcon-element" />
  }
}

export default Icon
