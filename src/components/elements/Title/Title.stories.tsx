import type { Meta, StoryObj } from '@storybook/react'
import Title from './index'

const meta: Meta<typeof Title> = {
  component: Title,
  args: {
    children: 'TITLE',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {}
