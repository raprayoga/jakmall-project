const getVariantColor = (variant: string) => {
  switch (variant) {
    case 'default':
      return '#ccc'

    case 'valid':
      return '#1BD97B'

    case 'invalid':
      return '#FF8A00'
  }
}

export default getVariantColor
