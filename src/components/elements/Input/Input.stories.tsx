import { useState } from 'react'
import Input from './index'

export default {
  component: Input,
  tags: ['autodocs'],
}

const StoryComponent = ({ variant }: { variant: string }) => {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (e: any) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return (
    <Input
      placeholder="Name"
      value={value}
      onChange={(e) => handleOnChange(e)}
      variant={variant}
    />
  )
}

export const Default = () => {
  return <StoryComponent variant="default" />
}

export const Valid = () => {
  return <StoryComponent variant="valid" />
}

export const Invalid = () => {
  return <StoryComponent variant="invalid" />
}
