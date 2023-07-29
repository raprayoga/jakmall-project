const getVariantColor = (variant: string) => {
  switch (variant) {
    case 'default':
      return '#00000066'

    case 'valid':
      return '#1BD97B'

    case 'invalid':
      return '#FF8A00'
  }
}

export default getVariantColor
