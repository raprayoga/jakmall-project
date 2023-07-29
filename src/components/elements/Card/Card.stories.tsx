import type { Meta, StoryObj } from '@storybook/react'
import Card from './index'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: 'TEXTCARD',
    style: { width: '300px' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => {
    return <Card {...args} onClick={action('onCLick!')} />
  },
}

export const Valid: Story = {
  render: (args) => {
    return <Card variant="valid" {...args} onClick={action('onCLick!')} />
  },
}

export const Invalid: Story = {
  render: (args) => {
    return <Card variant="invalid" {...args} onClick={action('onCLick!')} />
  },
}
