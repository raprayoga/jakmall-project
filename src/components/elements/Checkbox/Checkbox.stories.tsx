import type { Meta, StoryObj } from '@storybook/react'
import Checkbox, { StyledCheckboxWraper } from './index'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    checked: false,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => {
    return (
      <StyledCheckboxWraper style={{ width: '100px' }}>
        LABEL
        <Checkbox {...args} variant="default" />
      </StyledCheckboxWraper>
    )
  },
}

export const Valid: Story = {
  render: (args) => {
    return (
      <StyledCheckboxWraper style={{ width: '100px' }}>
        <Checkbox {...args} variant="valid" />
      </StyledCheckboxWraper>
    )
  },
}

export const Invalid: Story = {
  render: (args) => {
    return (
      <StyledCheckboxWraper style={{ width: '100px' }}>
        <Checkbox {...args} variant="invalid" />
      </StyledCheckboxWraper>
    )
  },
}
