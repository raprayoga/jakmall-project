import { useState } from 'react'
import Textarea from './index'

export default {
  component: Textarea,
  tags: ['autodocs'],
}

const StoryComponent = ({ variant }: { variant: string }) => {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (e: any) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return (
    <Textarea
      placeholder="Address"
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
