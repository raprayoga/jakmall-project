import type { Meta, StoryObj } from '@storybook/react'
import Badge from './index'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    children: '1',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => {
    return <Badge {...args} onClick={action('onCLick!')} />
  },
}

export const Active: Story = {
  render: (args) => {
    return <Badge {...args} isactive onClick={action('onCLick!')} />
  },
}
