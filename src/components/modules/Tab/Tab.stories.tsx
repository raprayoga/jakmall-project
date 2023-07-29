import type { Meta, StoryObj } from '@storybook/react'
import Tab from './index'

const meta: Meta<typeof Tab> = {
  component: Tab,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tab>

export const Default: Story = {}
